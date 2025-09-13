import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Search from './components/Search';
import Forecast from './components/Forecast';
import ServerError from './components/ServerError';
import AppContext from './store/app-context';
import type { AppCtx, AppState } from "./utils/interfaces";

function App() {
  const [data, setData] = useState<AppState>({
          unit: 'metric' as 'metric' | 'imperial',
          chosenDay: 'Monday',
          isValidLocation: true,
          isSearching: false,
          isServerWorking: false
      });
  
      const handleChangeHandler = (identifier: string, value: string | boolean) => {
          setData((prevData) => ({
          ...prevData,
          [identifier]: value
      }));
      console.log(`Data changed: ${identifier} = ${value}`);
      };

      const appContextValue: AppCtx = {
              data: data,
              handleChange: handleChangeHandler
        }
  

  return (
  <AppContext.Provider value={appContextValue} >
    <div className="w-screen min-h-screen bg-(--neutral-900)">
      <div className="flex flex-col items-center justify-center px-4 md:px-6 xl:px-28 pt-4 pb-12 md:pt-6 md:pb-20 xl:pt-12 gap-12 xl:gap-16">
          <Header/>
          {appContextValue.data.isServerWorking &&
            <>
              <h1 className="text-preset-2 text-(--neutral-0) text-wrap align-text-top text-center md:w-[482px] xl:w-[731px]">How's the sky looking today?</h1>
              <Search />
              {appContextValue.data.isValidLocation? <Forecast /> : <p className='text-preset-4 text-(--neutral-0) text-center'>No search result found!</p>}
            </>
          }
          {!appContextValue.data.isServerWorking && <ServerError/>}
      </div>
    </div>
  </AppContext.Provider>
  )
}

export default App
