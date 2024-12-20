import { XAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { useContext } from "react";
import { DataContext } from "@/provider/DataContext";
import { formatHours, formatPrice } from "@/lib/utils";

const ChartPrice = () => {
  const { coinData, volumeTotal } = useContext(DataContext);

  const coinDataMain = coinData["Time Series (5min)"];
  const chartData = Object.keys(coinDataMain).map((key) => ({
    name: key,
    value: parseFloat(coinDataMain[key]["2. high"]),
  }));

  return (
    <div className="p-6 bg-[#1a1b1f] rounded-lg xl:w-1/2 border border-gray-800">
      <div className="mb-4 text-lg text-gray-400">TVL</div>
      <div className="mb-4 text-4xl font-bold text-gray-50">
        {formatPrice(volumeTotal)}
      </div>
      {/* Area Chart with shadow */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e91e63" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#e91e63" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickFormatter={formatHours} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#e91e63"
            strokeWidth={5}
            fillOpacity={0.6}
            fill="url(#colorValue)"
            animationDuration={3000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPrice;
