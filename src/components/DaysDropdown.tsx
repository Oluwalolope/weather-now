import { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AppContext from "../store/app-context";

type DaysDropdownProps = {
  days: string[];
}

const DaysDropdown = ({ days }: DaysDropdownProps) => {
    const appCtx = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

  return (
    <div className="relative">
      <button type="button"
        className="bg-(--neutral-600) hover:bg-(--neutral-700) text-(--neutral-0) inline-flex items-center justify-center rounded-md text-sm h-[33px] w-[89px] md:h-[43px] md:w-[119px] px-4 py-2 cursor-pointer" onClick={handleToggle}>
        {appCtx.data.chosenDay}
        <span className="ml-2">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {open && (
        <div className="absolute z-20 right-0 mt-2 shadow-md rounded-xl px-2 py-1.5 border border-(--neutral-600) bg-(--neutral-700)">
          <ul className="w-56 h-auto gap-y-1 flex flex-col">
            {days.map((day, index) => (
              <li key={index} className={`relative flex-col items-center gap-2 px-4`}>
                <button className={`text-preset-7 text-(--neutral-0) w-full h-10 px-2 py-2.5 inline-flex items-center justify-between text-left cursor-pointer hover:bg-(--neutral-600) rounded-lg ${appCtx.data.chosenDay === day ? 'bg-(--neutral-600)' : ''}`} onClick={() => {appCtx.handleChange?.('chosenDay', day); setOpen(false)}} type="button">
                  {day}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
 
export default DaysDropdown;