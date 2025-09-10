import { useState } from 'react'
import Header from './components/Header'
import './index.css'

function App() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const handleUnitChange = (newUnit: 'metric' | 'imperial') => {
    setUnit(newUnit);
    console.log(`Unit changed to: ${newUnit}`);
  };
  return (
    <div className="w-screen h-screen bg-(--neutral-900)">
      <div className="flex flex-col items-center justify-center pt-4 pb-12 md:pt-6 md:pb-20 xl:pt-12">
        <Header unit={unit} onUnitChange={handleUnitChange} />
        <h1 className="text-preset-2 text-(--neutral-0) text-wrap">How's the sky looking today?</h1>
      </div>
    </div>
  )
}

export default App
