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
}

const HourlyForecastCard = ({forecast, hour, temperature}: HourlyForecastCardProps) => {
    return (
        <li className='flex flex-row justify-between items-center bg-(--neutral-700) border border-(--neutral-600) rounded-lg w-full h-[60px] ps-3 pe-4 py-2.5'>
            <div className='inline-flex items-center gap-2'>
                {forecast === 'Sunny' && <img className='size-[40px] object-cover' src={iconSunny} alt="Sunny" />}
                {forecast === 'Rain' && <img className='size-[40px] object-cover' src={iconRain} alt="Rain" />}
                {forecast === 'Fog' && <img className='size-[40px] object-cover' src={iconFog} alt="Fog" />}
                {forecast === 'Overcast' && <img className='size-[40px] object-cover' src={iconOvercast} alt="Overcast" />}
                {forecast === 'Snow' && <img className='size-[40px] object-cover' src={iconSnow} alt="Snow" />}
                {forecast === 'Storm' && <img className='size-[40px] object-cover' src={iconStorm} alt="Storm" />}
                {forecast === 'Partly Cloudy' && <img className='size-[40px] object-cover' src={iconPartlyCloudy} alt="Partly Cloudy" />}
                {forecast === 'Drizzle' && <img className='size-[40px] object-cover' src={iconDrizzle} alt="Drizzle" />}
                <span className='text-preset-5-medium text-(--neutral-0)'>{hour}</span>
            </div>
            <p className='text-preset-7 text-(--neutral-0)'>{temperature}</p>
        </li>
    );
}
 
export default HourlyForecastCard;