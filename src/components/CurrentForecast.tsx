import { useContext } from 'react';
import iconSunny from '../assets/icon-sunny.webp';
import CurrentForecastCard from './CurrentForecastCard';
import Loader from './Loader';
import AppContext from '../store/app-context';


const CurrentForecast = () => {
    const appCtx = useContext(AppContext);
    return (
        <>
            <div className={`flex flex-col md:flex-row md:justify-between items-center w-full h-[286px] bg-(--blue-500) rounded-[20px] px-6 gap-4 py-10 ${appCtx.data.isFetchingWeatherData ? 'motion-safe:animate-loading bg-(--neutral-800)' : 'bg-[url("./bg-today-small.svg")] md:bg-[url("./bg-today-large.svg")] bg-no-repeat bg-cover'}`}>
                {appCtx.data.isFetchingWeatherData ? <Loader /> : <>
                    <div className={`flex flex-col gap-3 items-center md:items-start ${appCtx.data.isFetchingWeatherData ? 'animate-loading' : ''}`}>
                        <h2 className='text-preset-4 text-(--neutral-0)'>Berlin, Germany</h2>
                        <p className='text-preset-6 text-(--neutral-0) opacity-80'>Tuesday, Aug 5, 2025</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-[120px] h-[120px] object-cover' src={iconSunny} alt="Sunny" />
                        <p className='text-preset-1 text-(--neutral-0)'>68°</p>
                    </div>
                </>}
            </div>
            <div className='grid grid-cols-2 gap-4 justify-items-center md:grid-cols-4 md:gap-5 pt-5 xl:pt-8'>
                <CurrentForecastCard measuredQuantity="Feels Like" measuredValue="64°" />
                <CurrentForecastCard measuredQuantity="Humidity" measuredValue="46%" />
                <CurrentForecastCard measuredQuantity="Wind Speed" measuredValue="9 mph" />
                <CurrentForecastCard measuredQuantity="Precipitation" measuredValue="0 in" />
            </div>
        </>
    );
}
 
export default CurrentForecast;