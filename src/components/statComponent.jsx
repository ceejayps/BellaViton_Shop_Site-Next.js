const Stat = ({ number, label }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          {number}
        </div>
        <div className="text-sm text-indigo-200 sm:text-base">{label}</div>
      </div>
    );
  }

  export default Stat