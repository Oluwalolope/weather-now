import { useContext, useState } from "react";
import AppContext from "../store/app-context";
import SearchDropdown from "./SearchDropdown";
import SearchInProgress from "./SearchInProgress";

const Search = () => {
    const appCtx = useContext(AppContext);
    const [searchResultLocations, setSearchResultLocations] = useState([{
        name: '',
        country: '', 
        countryCode: '', 
        city: '',
        popularlyKnownAs: '',
        latitude: '', 
        longitude: ''
    }]);
    
    const searchAction = (formData: FormData) => {
        const searchedLocation = formData.get('location') as string;
        console.log(`Searched location: ${searchedLocation}`);
        // Prevent empty searches
        if (searchedLocation.trim().length === 0) {
            return;
        }
        const searchURL = `https://geocoding-api.open-meteo.com/v1/search?name=${searchedLocation}&count=5&language=en&format=json`;
        appCtx.handleChange('hasUserSearched', true);
        appCtx.handleChange('isSearching', false);
        appCtx.handleChange('hasStartedSearching', true);
        fetchLocation(searchURL);
    }
    

    const fetchLocation = async(URL: string) => {
        try {
            const locationResponse = await fetch(URL);
            const locationResult = await locationResponse.json();
            
            if (!locationResponse.ok) {
                throw new Error('Failed to get location');
            }

            console.log(locationResult.results);
            // Update context state with fetched location data
            if (locationResult.results !== undefined) {
                appCtx.handleChange('hasStartedSearching', false);
                appCtx.handleChange('isSearching', true);
                const refinedSearchResult = locationResult.results.map((location: { name: string; country: string; country_code: string; admin1: string; admin2: string; latitude: number|string; longitude: number|string; }) => ({
                    name: location.name,
                    country: location.country,
                    countryCode: location.country_code,
                    city: location.admin1,
                    popularlyKnownAs: location.admin2,
                    latitude: location.latitude,
                    longitude: location.longitude
                }));
                console.log(refinedSearchResult);
                setSearchResultLocations(refinedSearchResult);
                // Update other context states as needed with locationResult
            }
            if (locationResult.results === undefined) {
                console.log('No location found');
                appCtx.handleChange('hasStartedSearching', false);
                appCtx.handleChange('isValidLocation', false);
            }
            
        } catch (error) {
            console.log(error)
            appCtx.handleChange('hasStartedSearching', false);
            appCtx.handleChange('isServerWorking', false);
        }
    };

    

    return (
        <div>
            <form className="w-full flex flex-col gap-3 md:flex-row md:w-[720px] xl:w-[656px]" action={searchAction}>
                <input type="search" name="location" id="location" placeholder="Search for a place..." className="bg-(--neutral-800) bg-[url('../icon-search.svg')] bg-no-repeat bg-position-[left_24px_top_16px] text-preset-5-medium text-(--neutral-200)  ps-14 pe-6 py-4 rounded-xl w-full h-14 md:flex-3 cursor-pointer" />
                <button type="submit" className="text-preset-5-medium bg-(--blue-500) text-(--neutral-0) rounded-xl w-full h-14 cursor-pointer hover:bg-(--blue-700) md:flex-1">Search</button>
            </form>
            {appCtx.data.hasStartedSearching && <SearchInProgress />}
            <SearchDropdown locations={searchResultLocations} /> 
        </div>
    );
}
 
export default Search;