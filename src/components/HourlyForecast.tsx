import { useContext } from "react";
import DaysDropdown from "./DaysDropdown";
import HourlyForecastCard from "./HourlyForecastCard";
import AppContext from "../store/app-context";

const HourlyForecast = () => {
    const appCtx = useContext(AppContext);
    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sundays'];
    return (
        <div className="h-[690px] w-full rounded-[20px] p-4 flex flex-col gap-4 bg-(--neutral-800) xl:flex-1">
            <div className="flex flex-row justify-between w-full items-center">
                <h2 className="text-preset-5 text-(--neutral-0)">Hourly Forecast</h2>
                <DaysDropdown days={daysOfTheWeek} />
            </div>
            <ul className="h-full flex flex-col gap-4 overflow-y-auto scrollbar scrollbar-w-1 scrollbar-h-[262px] scrollbar-thumb-[#302F4A] scrollbar-thumb-rounded-full scrollbar-track-transparent focus:outline-none">
                {appCtx.data.weatherData[2].map((hourData, index) => 
                 <HourlyForecastCard key={index} forecast={hourData.forecast} hour={hourData.time} temperature={`${hourData.temperature}°`} />
                )}
            </ul>
        </div>
    );
}

export default HourlyForecast;