import DailyForecastCard from "./DailyForecastCard";

const DailyForecast = () => {
    return (
        <div className="mt-8">
            <h2 className="text-preset-5 text-(--neutral-0)">Daily Forecast</h2>
            <div className="w-full grid grid-cols-3 md:grid-cols-7 gap-4 pt-6">
                <DailyForecastCard day="Tue" forecast="Rain" temperature="20°" apparentTemperature="14°" />
                <DailyForecastCard day="Wed" forecast="Drizzle" temperature="21°" apparentTemperature="15°" />
                <DailyForecastCard day="Thu" forecast="Sunny" temperature="24°" apparentTemperature="14°" />
                <DailyForecastCard day="Fri" forecast="Partly Cloudy" temperature="25°" apparentTemperature="13°" />
                <DailyForecastCard day="Sat" forecast="Storm" temperature="21°" apparentTemperature="15°" />
                <DailyForecastCard day="Sun" forecast="Snow" temperature="25°" apparentTemperature="16°" />
                <DailyForecastCard day="Mon" forecast="Fog" temperature="24°" apparentTemperature="15°" />
            </div>
        </div>
    );
}

export default DailyForecast;