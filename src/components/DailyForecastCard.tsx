import iconDrizzle from '../assets/icon-drizzle.webp';
import iconFog from '../assets/icon-fog.webp';
import iconOvercast from '../assets/icon-overcast.webp';
import iconRain from '../assets/icon-rain.webp';
import iconSnow from '../assets/icon-snow.webp';
import iconStorm from '../assets/icon-storm.webp';
import iconPartlyCloudy from '../assets/icon-partly-cloudy.webp';
import iconSunny from '../assets/icon-sunny.webp';


type DailyForecastCardProps = {
    day: string;
    forecast: string;
    temperature: string;
    apparentTemperature: string;
    isLoading: boolean;
}

const DailyForecastCard = ({ day, forecast, temperature, apparentTemperature, isLoading }: DailyForecastCardProps) => {
    return <div className={`w-full h-[165px] bg-(--neutral-800) px-2.5 py-4 ${isLoading ? 'motion-safe:animate-loading' : ''} rounded-xl border border-(--neutral-600) flex flex-col items-center gap-4`}>
        { !isLoading && <h3 className="text-preset-6 text-(--neutral-0)">{day}</h3>}
        {(forecast === 'Sunny' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconSunny} alt="Sunny" />}
        {(forecast === 'Rain' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconRain} alt="Rain" />}
        {(forecast === 'Fog' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconFog} alt="Fog" />}
        {(forecast === 'Overcast' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconOvercast} alt="Overcast" />}
        {(forecast === 'Snow' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconSnow} alt="Snow" />}
        {(forecast === 'Storm' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconStorm} alt="Storm" />}
        {(forecast === 'Partly Cloudy' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconPartlyCloudy} alt="Partly Cloudy" />}
        {(forecast === 'Drizzle' && !isLoading) && <img className='w-[60px] h-[60px] object-cover' src={iconDrizzle} alt="Drizzle" />}
        <div className="flex flex-row justify-between w-full">
            { !isLoading && <p className="text-preset-7 text-(--neutral-0)">{temperature}</p>}
            { !isLoading && <p className="text-preset-7 text-(--neutral-200)">{apparentTemperature}</p>}
        </div>
    </div>;
}
 
export default DailyForecastCard;