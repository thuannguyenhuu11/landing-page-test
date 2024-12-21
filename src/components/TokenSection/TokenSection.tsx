import dataTokenTotal from '@/database/dbTotal.json';
import { useContext } from 'react';
import { DataContext } from '@/provider/DataContext';

const TokenSection = () => {
    const { switchCoinData } = useContext(DataContext);

    return (
        <div className="w-[90%] mx-auto mt-10">
            <h2 className="mb-4 text-lg font-bold text-gray-500">Top Token</h2>
            <div className="p-5 text-white bg-gray-900 rounded-lg ">
                {/* Token Table */}
                <table className="w-full text-right">
                    <thead className="border-b border-gray-700">
                        <tr className="text-gray-500">
                            <th className="py-2">#</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">Price Change</th>
                            <th className="hidden py-2 md:table-cell">Volume 24H</th>
                            <th className="hidden py-2 md:table-cell">TVL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTokenTotal.top_gainers.map((token, index) => {
                            const isPositive = Number(token.change_amount) >= 0;
                            const changeAmountClass = isPositive ? 'text-green-500' : 'text-red-500';
                            const changeAmountText = isPositive
                                ? `↑ ${token.change_amount}`
                                : `↓ ${token.change_amount}`;

                            return (
                                <tr
                                    key={token.ticker}
                                    className="border-b border-gray-800 hover:cursor-pointer"
                                    onClick={() => switchCoinData(token.ticker)}
                                >
                                    <td className="py-4">{index + 1}</td>
                                    <td className="py-4">{token.ticker}</td>
                                    <td className="py-4">${token.price}</td>
                                    <td className={`py-4 ${changeAmountClass}`}>{changeAmountText}%</td>
                                    <td className="hidden py-4 md:table-cell">${token.volume}</td>
                                    <td className="hidden py-4 md:table-cell">${token.volume}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TokenSection;
