import iconDrizzle from '../assets/icon-drizzle.webp';
import iconFog from '../assets/icon-fog.webp';
import iconOvercast from '../assets/icon-overcast.webp';
import iconRain from '../assets/icon-rain.webp';
import iconSnow from '../assets/icon-snow.webp';
import iconStorm from '../assets/icon-storm.webp';
import iconPartlyCloudy from '../assets/icon-partly-cloudy.webp';
import iconSunny from '../assets/icon-sunny.webp';

type HourlyForecastCardProps = {
    forecast: string;
    hour: string;
    temperature: string;
    isLoading: boolean;
}

const HourlyForecastCard = ({forecast, hour, temperature, isLoading}: HourlyForecastCardProps) => {
    return (
        <li className={`flex flex-row justify-between items-center ${isLoading ? 'motion-safe:animate-loading' : ''} bg-(--neutral-700) border border-(--neutral-600) rounded-lg w-full h-[60px] ps-3 pe-4 py-2.5`}>
            <div className='inline-flex items-center gap-2'>
                {(forecast === 'Sunny' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconSunny} alt="Sunny" />}
                {(forecast === 'Rain' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconRain} alt="Rain" />}
                {(forecast === 'Fog' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconFog} alt="Fog" />}
                {(forecast === 'Overcast' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconOvercast} alt="Overcast" />}
                {(forecast === 'Snow' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconSnow} alt="Snow" />}
                {(forecast === 'Storm' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconStorm} alt="Storm" />}
                {(forecast === 'Partly Cloudy' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconPartlyCloudy} alt="Partly Cloudy" />}
                {(forecast === 'Drizzle' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconDrizzle} alt="Drizzle" />}
                { !isLoading && <span className='text-preset-5-medium text-(--neutral-0)'>{hour}</span>}
            </div>
            {!isLoading && <p className='text-preset-7 text-(--neutral-0)'>{temperature}</p>}
        </li>
    );
}
 
export default HourlyForecastCard;