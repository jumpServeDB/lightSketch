import LogoCard from "./components/LogoCard";
import "./index.css";
import ControlPanel from "./components/ControlPanel";
import { useState } from "react";
import clsx from "clsx";
import ThemeContext from "./contexts/DarkModeContext";
import CardHolder from "./components/CardHolder";
import MemoContext from "./contexts/MemoContext";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMemo, setIsMemo] = useState(false);

  return (
    <MemoContext.Provider
      value={{
        isMemo: isMemo,
        toggleMemo: () => {
          setIsMemo(!isMemo);
        },
      }}
    >
      <ThemeContext.Provider
        value={{
          isDarkMode: isDarkMode,
          toggleDarkMode: () => {
            setIsDarkMode(!isDarkMode);
          },
        }}
      >
        <main
          id="main"
          className={clsx(
            "flex flex-col items-center h-full min-h-screen",
            isDarkMode
              ? "bg-slate-800 text-orange-200"
              : "text-slate-800 bg-orange-50",
          )}
        >
          <h1 className="text-4xl my-4">Lightsketch</h1>
          <p className="px-10 mb-4 text-center">
            Memoization is an optimization technique where an algorithm
            maintains a record of previous inputs and their calculated results.
            Instead of recalculating known results, it will simply look up what
            it got last time - at O(1) time complexity.
          </p>
          <p className="px-10 mb-4 text-center">
            The difference is palpable in this example. Switching between Light
            and Dark mode should feel laggy (depends on your device CPU) until
            you turn on the "Memo" switch. Then switching themes should be
            basically instantaneous.
          </p>
          <ControlPanel />
          <CardHolder />
        </main>
      </ThemeContext.Provider>
    </MemoContext.Provider>
  );
};

export default App;
