import { useContext } from 'react';
import iconSunny from '../assets/icon-sunny.webp';
import iconDrizzle from '../assets/icon-drizzle.webp';
import iconFog from '../assets/icon-fog.webp';
import iconOvercast from '../assets/icon-overcast.webp';
import iconRain from '../assets/icon-rain.webp';
import iconSnow from '../assets/icon-snow.webp';
import iconStorm from '../assets/icon-storm.webp';
import iconPartlyCloudy from '../assets/icon-partly-cloudy.webp';
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
                        <h2 className='text-preset-4 text-(--neutral-0)'>{appCtx.data.locationName}</h2>
                        <p className='text-preset-6 text-(--neutral-0) opacity-80'>{appCtx.data.weatherData[0].day}</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        {(appCtx.data.weatherData[0].forecast === 'Sunny' && !appCtx.data.isFetchingWeatherData) && <img className='w-[120px] h-[120px] object-cover' src={iconSunny} alt="Sunny" />}
                        {(appCtx.data.weatherData[0].forecast === 'Rain' && !appCtx.data.isFetchingWeatherData) && <img className='w-[120px] h-[120px] object-cover' src={iconRain} alt="Rain" />}
                        {(appCtx.data.weatherData[0].forecast === 'Fog' && !appCtx.data.isFetchingWeatherData) && <img className='w-[120px] h-[120px] object-cover' src={iconFog} alt="Fog" />}
                        {(appCtx.data.weatherData[0].forecast === 'Overcast' && !appCtx.data.isFetchingWeatherData) && <img className='w-[120px] h-[120px] object-cover' src={iconOvercast} alt="Overcast" />}
                        {(appCtx.data.weatherData[0].forecast === 'Snow' && !appCtx.data.isFetchingWeatherData) && <img className='w-[120px] h-[120px] object-cover' src={iconSnow} alt="Snow" />}
                        {(appCtx.data.weatherData[0].forecast === 'Storm' && !appCtx.data.isFetchingWeatherData) && <img className='w-[120px] h-[120px] object-cover' src={iconStorm} alt="Storm" />}
                        {(appCtx.data.weatherData[0].forecast === 'Partly Cloudy' && !appCtx.data.isFetchingWeatherData) && <img className='w-[120px] h-[120px] object-cover' src={iconPartlyCloudy} alt="Partly Cloudy" />}
                        {(appCtx.data.weatherData[0].forecast === 'Drizzle' && !appCtx.data.isFetchingWeatherData) && <img className='w-[120px] h-[120px] object-cover' src={iconDrizzle} alt="Drizzle" />}
                        <p className='text-preset-1 text-(--neutral-0)'>{appCtx.data.weatherData[0].maxTemperature}</p>
                    </div>
                </>}
            </div>
            <div className='grid grid-cols-2 gap-4 justify-items-center md:grid-cols-4 md:gap-5 pt-5 xl:pt-8'>
                <CurrentForecastCard measuredQuantity="Feels Like" measuredValue={`${appCtx.data.weatherData[0].apparentTemperature}°`} />
                <CurrentForecastCard measuredQuantity="Humidity" measuredValue={`${appCtx.data.weatherData[0].humidity}%`} />
                <CurrentForecastCard measuredQuantity="Wind Speed" measuredValue={`${appCtx.data.weatherData[0].windSpeed} mph`} />
                <CurrentForecastCard measuredQuantity="Precipitation" measuredValue={`${appCtx.data.weatherData[0].precipitation} in`} />
            </div>
        </>
    );
}
 
export default CurrentForecast;