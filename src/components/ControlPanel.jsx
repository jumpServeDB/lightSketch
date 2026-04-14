import Toggle from "./Toggle";
import ThemeContext from "../contexts/DarkModeContext";
import { useContext } from "react";

const ControlPanel = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="my-4">
      <Toggle label="Dark Mode" action={themeContext.toggleDarkMode} />
    </div>
  );
};

export default ControlPanel;
