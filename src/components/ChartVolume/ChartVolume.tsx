import { Bar, BarChart, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { DataContext } from "@/provider/DataContext";
import { formatHours, formatPrice } from "@/lib/utils";

const ChartVolume = () => {
  const { coinData, volumeTotal } = useContext(DataContext);

  const coinDataMain = coinData["Time Series (5min)"];
  const chartData = Object.keys(coinDataMain).map((key) => ({
    name: key,
    value: parseFloat(coinDataMain[key]["5. volume"]),
  }));

  return (
    <div className="p-6 bg-[#1a1b1f] rounded-lg xl:w-1/2 border border-gray-800">
      <div className="mb-4 text-lg text-gray-400">Volume 24H</div>
      <div className="mb-4 text-4xl font-bold text-gray-50">
        {" "}
        {formatPrice(volumeTotal)}
      </div>
      {/* Simple Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" tickFormatter={formatHours} />
          <Tooltip />
          <Bar dataKey="value" fill="#1e90ff" animationDuration={2000} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartVolume;
