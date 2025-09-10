import Logo from "./Logo";
import unitIcon from "../assets/icon-units.svg";
import UnitsDropdown from "./UnitsDropdown";

const Header = ({ unit, onUnitChange }: { unit: 'metric' | 'imperial', onUnitChange: (newUnit: 'metric' | 'imperial') => void }) => {
    return (
    <header className="w-full max-w-3xl flex items-center justify-between mb-8 px-4">
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