import { XAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import data from "@/db.json";

interface TimeSeriesEntry {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface TimeSeries {
  [key: string]: TimeSeriesEntry;
}

const ChartPrice = () => {
  const formatXAxis = (tickItem: string) => {
    // Chỉ hiển thị các nhãn có định dạng giờ tròn và in ra giờ
    const date = new Date(tickItem);
    return date.getMinutes() === 0 && date.getSeconds() === 0
      ? date.getHours().toString()
      : "";
  };

  const timeSeries: TimeSeries = data["Time Series (5min)"];
  const chartData = Object.keys(timeSeries).map((key) => ({
    name: key,
    value: parseFloat(timeSeries[key]["2. high"]),
  }));

  return (
    <div className="bg-gray-700 rounded-lg p-6 w-1/2">
      <div className="text-lg text-gray-400 mb-4">TVL</div>
      <div className="text-4xl font-bold mb-4 text-gray-50">$5.32b</div>
      {/* Area Chart with shadow */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e91e63" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#e91e63" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickFormatter={formatXAxis}
            tick={{ fontSize: 20, fill: "#fff" }}
          />
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
