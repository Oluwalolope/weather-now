import DaysDropdown from "./DaysDropdown";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecast = () => {
    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sundays'];
    return (
        <div className="h-[690px] w-full rounded-[20px] p-4 flex flex-col gap-4 bg-(--neutral-800) xl:flex-1">
            <div className="flex flex-row justify-between w-full items-center">
                <h2 className="text-preset-5 text-(--neutral-0)">Hourly Forecast</h2>
                <DaysDropdown days={daysOfTheWeek} />
            </div>
            <ul className="h-full flex flex-col gap-4 overflow-y-auto scrollbar scrollbar-w-1 scrollbar-h-[262px] scrollbar-thumb-[#302F4A] scrollbar-thumb-rounded-full scrollbar-track-transparent focus:outline-none">
                <HourlyForecastCard forecast="Overcast" hour="3 PM" temperature="20°" />
                <HourlyForecastCard forecast="Partly Cloudy" hour="4 PM" temperature="20°" />
                <HourlyForecastCard forecast="Sunny" hour="5 PM" temperature="20°" />
                <HourlyForecastCard forecast="Overcast" hour="6 PM" temperature="19°" />
                <HourlyForecastCard forecast="Snow" hour="7 PM" temperature="18°" />
                <HourlyForecastCard forecast="Fog" hour="8 PM" temperature="18°" />
                <HourlyForecastCard forecast="Snow" hour="9 PM" temperature="17°" />
                <HourlyForecastCard forecast="Overcast" hour="10 PM" temperature="17°" />
                <HourlyForecastCard forecast="Rain" hour="11 PM" temperature="14°" />
                <HourlyForecastCard forecast="Storm" hour="12 AM" temperature="16°" />
            </ul>
        </div>
    );
}

export default HourlyForecast;