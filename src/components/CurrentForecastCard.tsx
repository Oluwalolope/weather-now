type CurrentForecastCardProps = {
    measuredQuantity: string;
    measuredValue: string;
}

const CurrentForecastCard = ({ measuredQuantity, measuredValue }: CurrentForecastCardProps) => {
    return (
        <div className="w-[165px] h-[118px] bg-(--neutral-800) p-5 rounded-xl border border-(--neutral-600)">
            <h3 className="text-preset-6 text-(--neutral-200) pb-6">{measuredQuantity}</h3>
            <p className="text-preset-3 text-(--neutral-0)">{measuredValue}</p>
        </div>
    );
}
 
export default CurrentForecastCard;