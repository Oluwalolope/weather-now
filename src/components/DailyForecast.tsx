import DailyForecastCard from "./DailyForecastCard";

type DailyForecastProps = {
    isLoading: boolean;
}

const DailyForecast = ({isLoading}: DailyForecastProps) => {
    return (
        <div className="mt-8">
            <h2 className="text-preset-5 text-(--neutral-0)">Daily Forecast</h2>
            <div className="w-full grid grid-cols-3 md:grid-cols-7 gap-4 pt-6">
                <DailyForecastCard isLoading={isLoading} day="Tue" forecast="Rain" temperature="20°" apparentTemperature="14°" />
                <DailyForecastCard isLoading={isLoading} day="Wed" forecast="Drizzle" temperature="21°" apparentTemperature="15°" />
                <DailyForecastCard isLoading={isLoading} day="Thu" forecast="Sunny" temperature="24°" apparentTemperature="14°" />
                <DailyForecastCard isLoading={isLoading} day="Fri" forecast="Partly Cloudy" temperature="25°" apparentTemperature="13°" />
                <DailyForecastCard isLoading={isLoading} day="Sat" forecast="Storm" temperature="21°" apparentTemperature="15°" />
                <DailyForecastCard isLoading={isLoading} day="Sun" forecast="Snow" temperature="25°" apparentTemperature="16°" />
                <DailyForecastCard isLoading={isLoading} day="Mon" forecast="Fog" temperature="24°" apparentTemperature="15°" />
            </div>
        </div>
    );
}

export default DailyForecast;