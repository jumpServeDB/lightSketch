import React from "react";
import heavyWork from "../utils/heavyWork";
import { useMemo } from "react";

const LogoCardMemo = (props) => {
  const { description, title, logo, name } = props;

  const work = useMemo(() => heavyWork(50000), [name]);

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
      className={
        "backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl  flex flex-col group w-full max-w-md m-4 " +
        // static string with Tailwind dark: variants to allow memoization.
        "bg-white/30 border border-white/50 hover:bg-white/40 text-slate-700 " +
        "dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-200"
      }
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
      <p className={"mb-6 grow " + "text-slate-700 " + "dark:text-slate-200"}>
        {description}
      </p>
      <button
        type="button"
        onClick={openWebsite}
        className={
          "w-full  text-white py-2.5 rounded-lg  hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 " +
          "bg-pink-500 hover:bg-pink-600 " +
          "dark:bg-pink-600 hover:bg-700"
        }
        aria-label={`Open ${name} website in new tab`}
      >
        Visit Website
      </button>
    </article>
  );
};

export default React.memo(LogoCardMemo);
