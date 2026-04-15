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
      <label htmlFor={`toggle-${label}`} className="select-none">
        {label}:
      </label>
      <button
        id={`toggle-${label}`}
        type="button"
        aria-pressed={isSwitchedOn}
        className={clsx(
          "ml-2 h-10 w-18 rounded-full cursor-pointer transition-all duration-100 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2",
          isSwitchedOn ? "bg-amber-100" : "bg-stone-600",
        )}
        onClick={ToggleSwitch}
      >
        <div
          aria-hidden="true"
          className={clsx(
            "h-10 w-10 rounded-full bg-slate-500 transform transition-transform duration-100",
            isSwitchedOn ? "translate-x-8" : "translate-x-0",
          )}
        />
      </button>
    </div>
  );
};

export default Toggle;
