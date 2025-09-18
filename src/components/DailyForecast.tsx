import { useContext } from "react";
import AppContext from "../store/app-context";
import DailyForecastCard from "./DailyForecastCard";

interface DailyForecast {
  forecast: string;
  day: string;
  max: number;
  min: number;
}

const DailyForecast = () => {
    const appCtx = useContext(AppContext);
    return (
        <div className="mt-8">
            <h2 className="text-preset-5 text-(--neutral-0)">Daily Forecast</h2>
            <div className="w-full grid grid-cols-3 md:grid-cols-7 gap-4 pt-6">
                {appCtx.data.weatherData[1].map((dayData: DailyForecast, index: number | string) => (
                    <DailyForecastCard key={index} day={dayData.day} forecast={dayData.forecast} temperature={dayData.max} apparentTemperature={dayData.min} />
                ))}
            </div>
        </div>
    );
}

export default DailyForecast;