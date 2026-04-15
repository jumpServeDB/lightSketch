import apiFetch from "../services/apiFetch";
import { useEffect, useState, useMemo } from "react";
import LogoCard from "./LogoCard";
import { useContext } from "react";
import ThemeContext from "../contexts/DarkModeContext";
import MemoContext from "../contexts/MemoContext";
import LogoCardMemo from "./LogoCardMemo";

const CardHolder = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { isMemo } = useContext(MemoContext);
  const [logos, setlogos] = useState([]);
  useEffect(() => {
    const getLogos = async () => {
      const json = await apiFetch();
      const data = json.records;
      const results = Object.entries(data).flatMap(([key, arr]) =>
        arr.map((item) => ({ ...item, group: key })),
      );
      setlogos(results);
      console.log(results);
    };
    getLogos();
  }, []);

  // useMemo here so that all cards do not re-render on dark mode theme change:
  const cardListMemo = useMemo(
    () =>
      logos.map((item) => (
        <LogoCardMemo
          key={`${item.name}-${item.variant}-${item.version}-memo`}
          description={item.example_description}
          title={item.example_title}
          logo={item.logo}
          name={item.name}
        />
      )),
    [logos],
  );

  const cardList = logos.map((item) => (
    <LogoCard
      key={`${item.name}-${item.variant}-${item.version}`}
      description={item.example_description}
      title={item.example_title}
      logo={item.logo}
      name={item.name}
    />
  ));

  return (
    <div
      className={
        isDarkMode
          ? "dark flex flex-wrap justify-center"
          : "flex flex-wrap justify-center"
      }
    >
      {isMemo ? cardListMemo : cardList}
    </div>
  );
};

export default CardHolder;
