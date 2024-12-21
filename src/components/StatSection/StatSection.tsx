const StatSection = () => {
  return (
    <div className="flex p-4 text-white bg-[#1a1b1f] rounded-lg w-[90%] mx-auto mt-10 gap-4 md:gap-10 border border-gray-800">
      <div className="flex items-center text-[8px] md:text-base">
        <span className="mr-1">Volume 24H:</span>
        <span className="font-semibold ">$860.60m </span>
        <span className="text-red-500 ">(↓ 39.33%)</span>
      </div>
      <div className="flex items-center text-[8px]  md:text-base">
        <span className="mr-1">Fees 24H:</span>
        <span className="font-semibold ">$2.45m</span>
        <span className="text-red-500 ">(↓ 15.75%)</span>
      </div>
      <div className="flex items-center text-[8px]  md:text-base">
        <span className="mr-1">TVL:</span>
        <span className="font-semibold ">$5.32b</span>
        <span className="text-green-500 ">(↑ 0.34%)</span>
      </div>
    </div>
  );
};

export default StatSection;
