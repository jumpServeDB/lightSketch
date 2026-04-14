import LogoCard from "./components/LogoCard";
import "./index.css";
import ControlPanel from "./components/ControlPanel";
import { useState } from "react";
import clsx from "clsx";
import ThemeContext from "./contexts/DarkModeContext";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        toggleDarkMode: () => {
          setIsDarkMode(!isDarkMode);
        },
      }}
    >
      <div
        className={clsx(
          "flex flex-col items-center h-screen",
          isDarkMode
            ? "bg-slate-800 text-orange-200"
            : "text-slate-800 bg-orange-50",
        )}
      >
        <h1 className="text-4xl my-4">Lightsketch</h1>
        <ControlPanel />
        <LogoCard
          description="1Password helps you keep your digital life secure by storing passwords, credit card details, and documents in an encrypted vault. Generate strong passwords, access your data from any device, and enjoy peace of mind with 1Password\\'s robust security features."
          title="Secure your digital life"
          logo="https://logotypes.dev/static/logos/1password-glyph-color.svg"
          name="1password"
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
