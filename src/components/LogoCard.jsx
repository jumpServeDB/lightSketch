const LogoCard = (props) => {
  const { description, title, logo, name } = props;

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
      className="backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/40 transition-all duration-300 flex flex-col group w-full max-w-md"
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
      <p className="text-slate-700 mb-6 grow">{description}</p>
      <button
        type="button"
        onClick={openWebsite}
        className="w-full bg-pink-500 text-white py-2.5 rounded-lg hover:bg-pink-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        aria-label={`Open ${name} website in new tab`}
      >
        Visit Website
      </button>
    </article>
  );
};

export default LogoCard;
