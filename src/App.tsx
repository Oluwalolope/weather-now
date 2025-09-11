import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Search from './components/Search';
import Forecast from './components/Forecast';

function App() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [chosenDay, setChosenDay] = useState<string>("--");

  const handleUnitChange = (newUnit: 'metric' | 'imperial') => {
    setUnit(newUnit);
    console.log(`Unit changed to: ${newUnit}`);
  };

  const handleDayChange = (day: string) => {
    setChosenDay(day);
    console.log(`The chosen day changed to: ${day}`);
  };
  return (
    <div className="w-screen min-h-screen bg-(--neutral-900)">
      <div className="flex flex-col items-center justify-center px-4 md:px-6 xl:px-28 pt-4 pb-12 md:pt-6 md:pb-20 xl:pt-12 gap-12 xl:gap-16">
        <Header unit={unit} onUnitChange={handleUnitChange} />
        <h1 className="text-preset-2 text-(--neutral-0) text-wrap align-text-top text-center md:w-[482px] xl:w-[731px]">How's the sky looking today?</h1>
        <Search />
        <Forecast chosenDay={chosenDay} onChangeChosenDay={handleDayChange} />
      </div>
    </div>
  )
}

export default App
