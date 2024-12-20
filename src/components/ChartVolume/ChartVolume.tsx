import { Bar, BarChart, XAxis, Tooltip, ResponsiveContainer } from "recharts";
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

const ChartVolume = () => {
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
    value: parseFloat(timeSeries[key]["5. volume"]),
  }));

  return (
    <div className="bg-gray-700 rounded-lg p-6 w-1/2">
      <div className="text-lg text-gray-400 mb-4">Volume</div>
      <div className="text-4xl font-bold mb-4 text-gray-50">$5.32b</div>
      {/* Simple Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <XAxis
            dataKey="name"
            tickFormatter={formatXAxis}
            tick={{ fontSize: 20, fill: "#fff" }}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#1e90ff" animationDuration={2000} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartVolume;
