import CurrentForecast from "./CurrentForecast";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

const Forecast = () => {
    return (
        <div className="w-full max-w-[1216px] flex flex-col gap-8 md:w-[720px] xl:w-full xl:flex-row">
            <div className="xl:flex-2">
                <CurrentForecast />
                <DailyForecast  />
            </div>
            <HourlyForecast/>
        </div>
    );
}

export default Forecast;