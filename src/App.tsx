import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Search from './components/Search';

function App() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const handleUnitChange = (newUnit: 'metric' | 'imperial') => {
    setUnit(newUnit);
    console.log(`Unit changed to: ${newUnit}`);
  };
  return (
    <div className="w-screen h-screen bg-(--neutral-900)">
      <div className="flex flex-col items-center justify-center px-4 md:px-6 xl:px-28 pt-4 pb-12 md:pt-6 md:pb-20 xl:pt-12 gap-12 xl:gap-16">
        <Header unit={unit} onUnitChange={handleUnitChange} />
        <h1 className="text-preset-2 text-(--neutral-0) text-wrap align-text-top text-center md:w-[482px] xl:w-[731px]">How's the sky looking today?</h1>
        <Search />
      </div>
    </div>
  )
}

export default App
