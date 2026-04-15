import { useState } from "react";
import clsx from "clsx";

const Toggle = (props) => {
  const { label, action } = props;
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);

  const ToggleSwitch = () => {
    setIsSwitchedOn(!isSwitchedOn);
    action();
  };

  return (
    <div className="flex items-center mx-4">
      <label htmlFor={label}>{label}:</label>
      <button
        id={label}
        className={clsx(
          "ml-2 h-10 w-18 rounded-full cursor-pointer transition-all duration-300 overflow-hidden",
          isSwitchedOn ? "bg-amber-100" : "bg-stone-600",
        )}
        onClick={ToggleSwitch}
      >
        <div
          className={clsx(
            "h-10 w-10 rounded-full bg-slate-500 transform transition-transform duration-300",
            isSwitchedOn ? "translate-x-8" : "translate-x-0",
          )}
        ></div>
      </button>
    </div>
  );
};

export default Toggle;
