import CurrentForecast from "./CurrentForecast";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

type ForecastProps = {
    chosenDay: string;
    onChangeChosenDay: (day: string) => void;
}

const Forecast = ({chosenDay, onChangeChosenDay}: ForecastProps) => {
    return (
        <div className="w-full max-w-[1216px] flex flex-col gap-8 md:w-[720px] xl:w-full xl:flex-row">
            <div className="xl:flex-2">
                <CurrentForecast />
                <DailyForecast />
            </div>
            <HourlyForecast chosenDay={chosenDay} handleChangeChosenDay={onChangeChosenDay}/>
        </div>
    );
}

export default Forecast;