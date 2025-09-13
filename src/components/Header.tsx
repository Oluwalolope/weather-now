import Logo from "./Logo";
import unitIcon from "../assets/icon-units.svg";
import UnitsDropdown from "./UnitsDropdown";

type HeaderProps = {
    unit: 'metric' | 'imperial';
    onUnitChange: (identifier: string, value: 'metric' | 'imperial') => void;
}

const Header = ({ unit, onUnitChange }: HeaderProps) => {
    return (
    <header className="w-full max-w-[1216px] flex items-center justify-between">
        <Logo />
        <UnitsDropdown buttonIcon={unitIcon} buttonLabel="Units" dropdownLabel={`Switch to ${unit === 'metric' ? 'imperial' : 'metric'}`} chosenUnit={unit} setChosenUnit={onUnitChange} items={[
          { measuredQuantity: "Temperature", metricUnit: "Celsius (°C)", imperialUnit: "Fahrenheit (°F)" },
          { measuredQuantity: "Wind Speed", metricUnit: "km/h", imperialUnit: "mph"},
          { measuredQuantity: "Precipitation", metricUnit: "Millimeters (mm)", imperialUnit: "Inches (in)"},
        ]} />
    </header>
    );
}
 
export default Header;