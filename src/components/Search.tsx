import { useCallback, useContext, useEffect, useState } from "react";
import AppContext from "../store/app-context";
import SearchDropdown from "./SearchDropdown";
import SearchInProgress from "./SearchInProgress";

const Search = () => {
    const appCtx = useContext(AppContext);
    const [hasStartedSearching, setHasStartedSearching] = useState<boolean>(false);
    const [searchResultLocations, setSearchResultLocations] = useState([{
        name: '',
        country: '', 
        latitude: '', 
        longitude: ''
    }]);
    let searchedLocation = '';
    let searchURL = `https://geocoding-api.open-meteo.com/v1/search?name=${searchedLocation}&count=5&language=en&format=json`;
    
    const searchAction = (formData: FormData) => {
        searchedLocation = formData.get('location') as string;
        console.log(searchedLocation);
        // Prevent empty searches
        if (searchedLocation.trim().length === 0) {
            return;
        }
        searchURL = `https://geocoding-api.open-meteo.com/v1/search?name=${searchedLocation}&count=5&language=en&format=json`;
        appCtx.handleChange('hasUserSearched', true);
        appCtx.handleChange('isSearching', false);
        setHasStartedSearching(true);
        fetchLocation(true);
    }
    

    const fetchLocation = useCallback(async(checkLocation?: boolean) => {
        try {
            const locationResponse = await fetch(searchURL);
            const locationResult = await locationResponse.json();
            
            if (!locationResponse.ok) {
                throw new Error('Failed to get location');
            }

            console.log(locationResult.results);
            // Update context state with fetched location data
            if (locationResult.results !== undefined) {
                setHasStartedSearching(false);
                appCtx.handleChange('isValidLocation', true);
                appCtx.handleChange('isSearching', true);
                const refinedSearchResult = locationResult.results.map((location: { name: string; country: string; latitude: number|string; longitude: number|string; }) => ({
                    name: location.name,
                    country: location.country,
                    latitude: location.latitude,
                    longitude: location.longitude
                }));
                console.log(refinedSearchResult);
                setSearchResultLocations(refinedSearchResult);
                // Update other context states as needed with locationResult
            }
            if (checkLocation && locationResult.results === undefined) {
                console.log('No location found');
                setHasStartedSearching(false);
                appCtx.handleChange('isValidLocation', false);
            }
            
        } catch (error) {
            console.log(error)
            setHasStartedSearching(false);
            appCtx.handleChange('isServerWorking', false);
        }
    }, [searchURL, appCtx]);
    useEffect(() => {
        // On component mount, fetch location based on default or empty search to test server
        fetchLocation();
        console.log('Component mounted, fetching location');
    }, [fetchLocation, appCtx]);


    return (
        <div>
            <form className="w-full flex flex-col gap-3 md:flex-row md:w-[720px] xl:w-[656px]" action={searchAction}>
                <input type="search" name="location" id="location" placeholder="Search for a place..." className="bg-(--neutral-800) bg-[url('../icon-search.svg')] bg-no-repeat bg-position-[left_24px_top_16px] text-preset-5-medium text-(--neutral-200)  ps-14 pe-6 py-4 rounded-xl w-full h-14 md:flex-3 cursor-pointer" />
                <button type="submit" className="text-preset-5-medium bg-(--blue-500) text-(--neutral-0) rounded-xl w-full h-14 cursor-pointer hover:bg-(--blue-700) md:flex-1">Search</button>
            </form>
            {hasStartedSearching && <SearchInProgress />}
            <SearchDropdown locations={searchResultLocations} /> 
        </div>
    );
}
 
export default Search;