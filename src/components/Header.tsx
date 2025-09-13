import Logo from "./Logo";
import unitIcon from "../assets/icon-units.svg";
import UnitsDropdown from "./UnitsDropdown";

const Header = () => {
    return (
    <header className="w-full max-w-[1216px] flex items-center justify-between">
        <Logo />
        <UnitsDropdown buttonIcon={unitIcon} buttonLabel="Units" items={[
          { measuredQuantity: "Temperature", metricUnit: "Celsius (°C)", imperialUnit: "Fahrenheit (°F)" },
          { measuredQuantity: "Wind Speed", metricUnit: "km/h", imperialUnit: "mph"},
          { measuredQuantity: "Precipitation", metricUnit: "Millimeters (mm)", imperialUnit: "Inches (in)"},
        ]} />
    </header>
    );
}
 
export default Header;