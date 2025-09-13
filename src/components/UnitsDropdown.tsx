import { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AppContext from "../store/app-context";

type UnitsDropdownProps = {
  buttonLabel: string;
  buttonIcon: string;
  items: {
    measuredQuantity: string;
    metricUnit: string;
    imperialUnit: string
  }[];
}

const UnitsDropdown = ({ buttonLabel, buttonIcon, items }: UnitsDropdownProps) => {
    const appCtx = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

  return (
    <div className="relative">
      <button type="button"
        className="bg-(--neutral-800) hover:bg-(--neutral-700) text-(--neutral-0) inline-flex items-center justify-center rounded-md text-sm h-[33px] w-[89px] md:h-[43px] md:w-[119px] px-4 py-2 cursor-pointer" onClick={handleToggle}>
        <img src={buttonIcon} className="mr-2" />
        {buttonLabel}
        <span className="ml-2">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {open && (
        <div className="absolute z-10 right-0 mt-2 shadow-md rounded-xl px-2 py-1.5 border bg-(--neutral-700)">
            <p className="text-preset-7 text-(--neutral-0) px-4 py-2">{`Switch to ${appCtx.data.unit === 'metric' ? 'imperial' : 'metric'}`}</p>
          <ul className="w-56 h-auto gap-y-1 flex flex-col">
            {items.map((item, index) => (
              <li key={index} className={`relative flex-col items-center gap-2 px-4 py-2`}>
                <p className="text-preset-8 text-(--neutral-300) pb-2">{item.measuredQuantity}</p>
                <button className={`text-preset-7 text-(--neutral-0) w-full h-10 px-2 py-2.5 inline-flex items-center justify-between text-left cursor-pointer hover:bg-(--neutral-600) rounded-lg ${appCtx.data.unit === 'metric' ? 'bg-(--neutral-600)' : ''}`} onClick={() => {appCtx.handleChange?.('unit','metric')}} type="button">
                  {item.metricUnit}
                  {appCtx.data.unit === 'metric' && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" fill="none" viewBox="0 0 14 11"><path fill="#fff" d="M11.895 1.047c.136-.137.355-.137.464 0l.793.766c.11.136.11.355 0 .464L4.95 10.48a.315.315 0 0 1-.465 0L.82 6.844c-.11-.137-.11-.356 0-.465l.793-.793c.11-.11.328-.11.465 0l2.625 2.652 7.192-7.191Z"/></svg>}
                </button>
                <button className={`text-preset-7 text-(--neutral-0) w-full h-10 px-2 py-2.5 inline-flex items-center justify-between text-left cursor-pointer hover:bg-(--neutral-600) rounded-lg ${appCtx.data.unit === 'imperial' ? 'bg-(--neutral-600)' : ''}`} onClick={() => { appCtx.handleChange?.('unit','imperial')}} type="button">
                  {item.imperialUnit}
                  {appCtx.data.unit === 'imperial' && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" fill="none" viewBox="0 0 14 11"><path fill="#fff" d="M11.895 1.047c.136-.137.355-.137.464 0l.793.766c.11.136.11.355 0 .464L4.95 10.48a.315.315 0 0 1-.465 0L.82 6.844c-.11-.137-.11-.356 0-.465l.793-.793c.11-.11.328-.11.465 0l2.625 2.652 7.192-7.191Z"/></svg>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
 
export default UnitsDropdown;