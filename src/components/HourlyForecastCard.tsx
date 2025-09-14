import iconDrizzle from '../assets/icon-drizzle.webp';
import iconFog from '../assets/icon-fog.webp';
import iconOvercast from '../assets/icon-overcast.webp';
import iconRain from '../assets/icon-rain.webp';
import iconSnow from '../assets/icon-snow.webp';
import iconStorm from '../assets/icon-storm.webp';
import iconPartlyCloudy from '../assets/icon-partly-cloudy.webp';
import iconSunny from '../assets/icon-sunny.webp';
import { useContext } from 'react';
import AppContext from '../store/app-context';

type HourlyForecastCardProps = {
    forecast: string;
    hour: string;
    temperature: string;
}

const HourlyForecastCard = ({forecast, hour, temperature}: HourlyForecastCardProps) => {
    const appCtx = useContext(AppContext);
    return (
        <li className={`flex flex-row justify-between items-center ${appCtx.data.isFetchingWeatherData ? 'motion-safe:animate-loading' : ''} bg-(--neutral-700) border border-(--neutral-600) rounded-lg w-full h-[60px] ps-3 pe-4 py-2.5`}>
            <div className='inline-flex items-center gap-2'>
                {(forecast === 'Sunny' && !appCtx.data.isFetchingWeatherData) && <img className='w-[60px] h-[60px] object-cover' src={iconSunny} alt="Sunny" />}
                {(forecast === 'Rain' && !appCtx.data.isFetchingWeatherData) && <img className='w-[60px] h-[60px] object-cover' src={iconRain} alt="Rain" />}
                {(forecast === 'Fog' && !appCtx.data.isFetchingWeatherData) && <img className='w-[60px] h-[60px] object-cover' src={iconFog} alt="Fog" />}
                {(forecast === 'Overcast' && !appCtx.data.isFetchingWeatherData) && <img className='w-[60px] h-[60px] object-cover' src={iconOvercast} alt="Overcast" />}
                {(forecast === 'Snow' && !appCtx.data.isFetchingWeatherData) && <img className='w-[60px] h-[60px] object-cover' src={iconSnow} alt="Snow" />}
                {(forecast === 'Storm' && !appCtx.data.isFetchingWeatherData) && <img className='w-[60px] h-[60px] object-cover' src={iconStorm} alt="Storm" />}
                {(forecast === 'Partly Cloudy' && !appCtx.data.isFetchingWeatherData) && <img className='w-[60px] h-[60px] object-cover' src={iconPartlyCloudy} alt="Partly Cloudy" />}
                {(forecast === 'Drizzle' && !appCtx.data.isFetchingWeatherData) && <img className='w-[60px] h-[60px] object-cover' src={iconDrizzle} alt="Drizzle" />}
                { !appCtx.data.isFetchingWeatherData && <span className='text-preset-5-medium text-(--neutral-0)'>{hour}</span>}
            </div>
            {!appCtx.data.isFetchingWeatherData && <p className='text-preset-7 text-(--neutral-0)'>{temperature}</p>}
        </li>
    );
}
 
export default HourlyForecastCard;