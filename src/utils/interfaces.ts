export type AppCtx = {
    data: AppState;
    handleChange: (key: string, value: string | number | boolean | { latitude: string | number; longitude: string | number }) => void
}

export type AppState = {
  location: {
    latitude: number|string,
    longitude: number|string,
  }
  unit: 'metric' | 'imperial';
  chosenDay: string;
  isValidLocation: boolean;
  hasUserSearched: boolean;
  hasStartedSearching: boolean;
  isFetchingWeatherData: boolean;
  isSearching: boolean;
  isServerWorking: boolean;
}
// type AppCtx = {
//     data: {
//         unit: 'metric' | 'imperial',
//         location: {
//             latitude: string | number,
//             longitude: string | number
//         },
//         chosenDay: string,
//         isValidLocation: boolean,
//         isFetchingWeatherData: boolean,
//         hasUserSearched: boolean,
//         isSearching: boolean,
//         isServerWorking: boolean
//     },
//     handleChange: (key: string, value: string | number | boolean | { latitude: string | number; longitude: string | number }) => void
// }