import ChartPrice from "../ChartPrice/ChartPrice";
import ChartVolume from "../ChartVolume/ChartVolume";

const ChartSection = () => {
  return (
    <div className="flex-col my-10 mx-20">
      <h1 className="text-white">Uniswap Overview</h1>

      <div className="mt-10 flex gap-10">
        <ChartPrice />
        <ChartVolume />
      </div>
    </div>
  );
};

export default ChartSection;
