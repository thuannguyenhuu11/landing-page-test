import { Bar, BarChart, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import { DataContext } from '@/provider/DataContext';

const ChartVolume = () => {
    const { coinData } = useContext(DataContext);

    const coinDataMain = coinData['Time Series (5min)'];
    const chartData = Object.keys(coinDataMain).map(key => ({
        name: key,
        value: parseFloat(coinDataMain[key]['5. volume']),
    }));

    const formatHours = (item: string) => {
        const date = new Date(item);
        const hours = date.getHours().toString().padStart(2, '0');
        return hours;
    };

    return (
        <div className="p-6 bg-gray-900 rounded-lg xl:w-1/2">
            <div className="mb-4 text-lg text-gray-400">Volume 24H</div>
            <div className="mb-4 text-4xl font-bold text-gray-50">$860.60m</div>
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
