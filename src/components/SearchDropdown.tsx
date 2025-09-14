import { useContext } from "react";
import AppContext from "../store/app-context";

type LocationsDropdownProps = {
  locations: { name: string; country: string; latitude: number|string; longitude: number|string; }[] ;
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
                <button className="text-preset-7 text-(--neutral-0) w-full h-10 px-2 py-2.5 inline-flex items-center justify-between text-left cursor-pointer hover:bg-(--neutral-600) rounded-lg " onClick={() => {
                    appCtx.handleChange('isSearching', false); 
                    appCtx.handleChange('location', { latitude: location.latitude, longitude: location.longitude })
                    }}  type="button">
                  {location.name}, {location.country}
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