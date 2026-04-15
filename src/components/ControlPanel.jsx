import Toggle from "./Toggle";
import ThemeContext from "../contexts/DarkModeContext";
import { useContext } from "react";
import MemoContext from "../contexts/MemoContext";

const ControlPanel = () => {
  const themeContext = useContext(ThemeContext);
  const memoContext = useContext(MemoContext);

  return (
    <div className="my-4 flex">
      <Toggle label="Dark Mode" action={themeContext.toggleDarkMode} />
      <Toggle label="Memo" action={memoContext.toggleMemo} />
    </div>
  );
};

export default ControlPanel;
