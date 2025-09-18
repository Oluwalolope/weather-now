import { useContext } from "react";
import AppContext from "../store/app-context";
import getWeatherData from "../utils/getWeatherData";

type LocationsDropdownProps = {
  locations: { name: string; country: string; countryCode: string; popularlyKnownAs: string; city: string; latitude: number|string; longitude: number|string; }[] ;
}

const SearchDropdown = ({ locations }: LocationsDropdownProps) => {
    const appCtx = useContext(AppContext);

  return (
    <div className="relative">
      {appCtx.data.isSearching && (
        <div className="absolute z-20 left-0 mt-2 shadow-md rounded-xl px-2 py-1.5 border border-(--neutral-600) bg-(--neutral-700) w-full">
          <ul className="w-full h-auto gap-y-1 flex flex-col">
            {locations.map((location, index) => (
              <li key={index} className={`relative flex-col items-center gap-2 px-4`}>
                <button className="text-preset-7 text-(--neutral-0) w-full h-10 px-2 py-2.5 inline-flex items-center gap-3 text-left cursor-pointer hover:bg-(--neutral-600) rounded-lg " onClick={() => {
                    appCtx.handleChange('isSearching', false); 
                    appCtx.handleChange('isValidLocation', true);
                    appCtx.handleChange('location', { latitude: location.latitude, longitude: location.longitude });
                    appCtx.handleChange('locationName', `${location.name}, ${location.country}`);
                    getWeatherData(appCtx, location.latitude, location.longitude);
                    }}  type="button">
                  {(location.countryCode && <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${location.countryCode}.svg`} alt={location.countryCode} className="size-5" />)}
                  {location.popularlyKnownAs && `${location.popularlyKnownAs} ,`} {location.name}, {location.city} {!location.countryCode && `(${location.country})`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchDropdown;