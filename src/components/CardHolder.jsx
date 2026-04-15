import apiFetch from "../services/apiFetch";
import { useEffect, useState, useMemo } from "react";
import LogoCard from "./LogoCard";

const CardHolder = () => {
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
  const cardList = logos.map((item) => (
    <LogoCard
      key={`${item.name}-${item.variant}-${item.version}`}
      description={item.example_description}
      title={item.example_title}
      logo={item.logo}
      name={item.name}
    />
  ));

  return <div className="flex flex-wrap justify-center">{cardList}</div>;
};

export default CardHolder;
