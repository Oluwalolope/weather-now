import { useEffect, useState } from 'react'
import Header from './components/Header'
import './index.css'
import Search from './components/Search';
import Forecast from './components/Forecast';
import ServerError from './components/ServerError';
import AppContext from './store/app-context';
import type { AppCtx, AppState } from "./utils/interfaces";
import getWeatherData from './utils/getWeatherData';

function App() {
  const [displayedParagraph, setDisplayedParagraph] = useState('Please enter a location');
  const [data, setData] = useState<AppState>({
          location: {
            latitude: '',
            longitude: ''
          },
          locationName: 'Your Current Location',
          weatherData: [],
          unit: 'metric' as 'metric' | 'imperial',
          isValidLocation: false,
          hasUserSearched: false,
          hasStartedSearching: false,
          isFetchingWeatherData: false,
          isSearching: false,
          isServerWorking: true
      });
  
      const handleChangeHandler = (key: string, value: unknown) => {
          setData((prevData) => ({
          ...prevData,
          [key]: value
      }));
      };

      const appContextValue: AppCtx = {
        data: data,
        handleChange: handleChangeHandler
      }
      
      useEffect(() => {
        if (data.hasUserSearched) {
          setDisplayedParagraph('No search result found!');
        }
      }, []);
      
      useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          handleChangeHandler('location', { latitude: position.coords.latitude, longitude: position.coords.longitude });
          getWeatherData(appContextValue, position.coords.latitude, position.coords.longitude);
          setDisplayedParagraph('Getting weather data for your current location...');
        }, (error) => {
          console.log(error);
        });
        handleChangeHandler('location', { latitude: 0, longitude: 0 });
      }, []);
  

  return (
  <AppContext.Provider value={appContextValue} >
    <div className="w-screen min-h-screen bg-(--neutral-900)">
      <div className="flex flex-col items-center justify-center px-4 md:px-6 xl:px-28 pt-4 pb-12 md:pt-6 md:pb-20 xl:pt-12 gap-12 xl:gap-16">
          <Header/>
          {data.isServerWorking &&
            <>
              <h1 className="text-preset-2 text-(--neutral-0) text-wrap align-text-top text-center md:w-[482px] xl:w-[731px]">How's the sky looking today?</h1>
              <Search />
              {data.isValidLocation && <Forecast />} 
              {(!data.isValidLocation && !data.isSearching && !data.hasStartedSearching) && <p className='text-preset-4 text-(--neutral-0) text-center'>{displayedParagraph}</p>} 
            </>
          }
          {!data.isServerWorking && <ServerError/>}
      </div>
    </div>
  </AppContext.Provider>
  )
}

export default App
