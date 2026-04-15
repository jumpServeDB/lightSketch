import clsx from "clsx";
import { useContext } from "react";
import ThemeContext from "../contexts/DarkModeContext";

const LogoCard = (props) => {
  const { description, title, logo, name } = props;
  const themeContext = useContext(ThemeContext);

  const openWebsite = () => {
    window.open(
      `https://www.google.com/search?q=${name} website`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <article
      aria-labelledby={name}
      className={clsx(
        "backdrop-blur-lg  rounded-2xl p-6 shadow-lg hover:shadow-2xl flex flex-col group w-full max-w-md m-4",
        themeContext.isDarkMode
          ? "bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-slate-100"
          : "bg-white/30 border border-white/50 hover:bg-white/40",
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-15 h-15 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 "
          aria-hidden="true"
        >
          <img src={logo} alt={`${name} company logo`} />
        </div>
        <h3 className="text-xl">{name}</h3>
      </div>
      <h4 className="text-xl mb-4">{title}</h4>
      <p
        className={clsx(
          " mb-6 grow",
          themeContext.isDarkMode ? "text-slate-200" : "text-slate-700",
        )}
      >
        {description}
      </p>
      <button
        type="button"
        onClick={openWebsite}
        className={clsx(
          "w-full  text-white py-2.5 rounded-lg  hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400",
          themeContext.isDarkMode
            ? "bg-pink-600 hover:bg-700"
            : "bg-pink-500 hover:bg-pink-600",
        )}
        aria-label={`Open ${name} website in new tab`}
      >
        Visit Website
      </button>
    </article>
  );
};

export default LogoCard;
