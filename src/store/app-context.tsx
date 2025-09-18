import { createContext } from "react";
import type { AppCtx } from "../utils/interfaces";


const AppContext = createContext<AppCtx>({
    data: {
        unit: 'metric' as 'metric' | 'imperial',
        location: {
            latitude: '',
            longitude: ''
        },
        locationName: 'Your Current Location',
        weatherData: [],
        isValidLocation: true,
        isFetchingWeatherData: false,
        hasUserSearched: false,
        hasStartedSearching: false,
        isSearching: false,
        isServerWorking: true
    },
    handleChange: () => {}
});

export default AppContext;