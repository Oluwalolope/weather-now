import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Search from './components/Search';
import Forecast from './components/Forecast';
import ServerError from './components/ServerError';

function App() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [chosenDay, setChosenDay] = useState<string>("Monday");
  const [isValidLocation, setIsValidLocation] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isServerWorking, setIsServerWorking] = useState<boolean>(true);

  const handleUnitChange = (newUnit: 'metric' | 'imperial') => {
    setUnit(newUnit);
    console.log(`Unit changed to: ${newUnit}`);
  };

  const handleDayChange = (day: string) => {
    setChosenDay(day);
    console.log(`The chosen day changed to: ${day}`);
  };
  const handleLocationChange = (isValid: boolean) => {
    setIsValidLocation(isValid);
    console.log(`The location validity changed to: ${isValid}`);
  };
  const handleServerError = (serverStatus: boolean) => {
    setIsServerWorking(serverStatus);
    console.log(`The server status changed to: ${serverStatus}`);
  };
  return (
    <div className="w-screen min-h-screen bg-(--neutral-900)">
      <div className="flex flex-col items-center justify-center px-4 md:px-6 xl:px-28 pt-4 pb-12 md:pt-6 md:pb-20 xl:pt-12 gap-12 xl:gap-16">
        <Header unit={unit} onUnitChange={handleUnitChange} />
        {isServerWorking && 
          <>
            <h1 className="text-preset-2 text-(--neutral-0) text-wrap align-text-top text-center md:w-[482px] xl:w-[731px]">How's the sky looking today?</h1>
            <Search />
            {isValidLocation? <Forecast chosenDay={chosenDay} onChangeChosenDay={handleDayChange} isLoading={isLoading} /> : <p className='text-preset-4 text-(--neutral-0) text-center'>No search result found!</p>}
          </>
        }
        {!isServerWorking && <ServerError onHandleServerError={handleServerError} />}
      </div>
    </div>
  )
}

export default App
