const RapCard = () => {
  const fireLevels = [
    "from-slate-500 to-slate-400",
    "from-slate-500 to-slate-200",
    "from-purple-500 to-green-400",
    "from-orange-500 to-pink-400",
  ];

  return (
    <div className="rounded-md bg-slate-800 flex p-5 gap-x-5 items-center">
      <div
        className={`text-xl text-cyan-100 font-semibold flex-1 bg-gradient-to-br text-transparent bg-clip-text ${fireLevels[3]}`}
      >
        Rollies for the Homies
      </div>
      <div className="text-cyan-100 font-semibold text-md">Lyrics</div>
      <div className="text-cyan-100 font-semibold text-md">Play Icon</div>
    </div>
  );
};

export default RapCard;
