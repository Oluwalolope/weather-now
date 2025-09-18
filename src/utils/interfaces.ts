import type React from "react";

export type AppCtx = {
    data: AppState;
    handleChange: (key: string, value: unknown) => void
}

interface WeatherDataItem {
  day: string;
  forecast: string;
  maxTemperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  map: {
    [index: string]: React.ReactNode;
    (key: unknown): React.ReactNode;
  };
}


export type AppState = {
  location: {
    latitude: number|string,
    longitude: number|string,
  };
  locationName: string;
  weatherData: WeatherDataItem[];
  unit: 'metric' | 'imperial';
  isValidLocation: boolean;
  hasUserSearched: boolean;
  hasStartedSearching: boolean;
  isFetchingWeatherData: boolean;
  isSearching: boolean;
  isServerWorking: boolean;
};