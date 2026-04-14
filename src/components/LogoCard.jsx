const LogoCard = (props) => {
  const { description, title, logo, name } = props;

  return (
    <div className="backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/40 transition-all duration-300 flex flex-col group w-full max-w-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
          <img src={logo} alt={`${name} company logo`} />
        </div>
        <h3 className="text-xl">{name}</h3>
      </div>
      <h4 className="text-xl mb-4">{title}</h4>
      <p className="text-slate-700 mb-6 flex-grow">{description}</p>
      <button className="w-full bg-pink-500 text-white py-2.5 rounded-lg hover:bg-pink-600 hover:scale-105 transition-all duration-200">
        Click for Website
      </button>
    </div>
  );
};

export default LogoCard;
