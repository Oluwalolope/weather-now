import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Search from './components/Search';
import Forecast from './components/Forecast';
import ServerError from './components/ServerError';

type AppState = {
  unit: 'metric' | 'imperial';
  chosenDay: string;
  isValidLocation: boolean;
  isSearching: boolean;
  isServerWorking: boolean;
}

function App() {
  const [data, setData] = useState<AppState>({
    unit: 'metric' as 'metric' | 'imperial',
    chosenDay: 'Monday',
    isValidLocation: true,
    isSearching: false,
    isServerWorking: false
  });

  const handleChange = (identifier: string, value: string | boolean) => {
    setData((prevData) => ({
      ...prevData,
      [identifier]: value
    }));
    console.log(`Data changed: ${identifier} = ${value}`);
  };

  return (
    <div className="w-screen min-h-screen bg-(--neutral-900)">
      <div className="flex flex-col items-center justify-center px-4 md:px-6 xl:px-28 pt-4 pb-12 md:pt-6 md:pb-20 xl:pt-12 gap-12 xl:gap-16">
        <Header unit={data.unit} onUnitChange={handleChange} />
        {data.isServerWorking && 
          <>
            <h1 className="text-preset-2 text-(--neutral-0) text-wrap align-text-top text-center md:w-[482px] xl:w-[731px]">How's the sky looking today?</h1>
            <Search />
            {data.isValidLocation? <Forecast chosenDay={data.chosenDay} onChangeChosenDay={handleChange} isSearching={data.isSearching} /> : <p className='text-preset-4 text-(--neutral-0) text-center'>No search result found!</p>}
          </>
        }
        {!data.isServerWorking && <ServerError onHandleServerError={handleChange} />}
      </div>
    </div>
  )
}

export default App
