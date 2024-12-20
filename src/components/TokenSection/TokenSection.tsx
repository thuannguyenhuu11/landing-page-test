const tokens = [
  {
    name: "Ether (ETH)",
    price: "$3.91k",
    change: "+0.34%",
    volume: "$745.89m",
    tvl: "$2.19b",
  },
  {
    name: "USD Coin (USDC)",
    price: "$1.00",
    change: "0.00%",
    volume: "$223.63m",
    tvl: "$630.37m",
  },
  {
    name: "Wrapped BTC (WBTC)",
    price: "$68.51k",
    change: "+0.24%",
    volume: "$63.41m",
    tvl: "$400.75m",
  },
  {
    name: "Tether USD (USDT)",
    price: "$1.00",
    change: "0.00%",
    volume: "$132.68m",
    tvl: "$199.89m",
  },
  {
    name: "Dai Stablecoin (DAI)",
    price: "$1.00",
    change: "+0.02%",
    volume: "$18.88m",
    tvl: "$106.53m",
  },
  {
    name: "Frax (FRAX)",
    price: "$1.00",
    change: "-0.10%",
    volume: "$2.42m",
    tvl: "$79.35m",
  },
  {
    name: "Pepe (PEPE)",
    price: "<$0.001",
    change: "-7.57%",
    volume: "$15.84m",
    tvl: "$74.37m",
  },
  {
    name: "Maker (MKR)",
    price: "$2.43k",
    change: "+15.01%",
    volume: "$16.15m",
    tvl: "$67.34m",
  },
  {
    name: "ChainLink Token (LINK)",
    price: "$20.01",
    change: "+1.23%",
    volume: "$3.50m",
    tvl: "$48.28m",
  },
  {
    name: "Flooring Lab Credit (FLC)",
    price: "$0.03",
    change: "-1.24%",
    volume: "$1.68m",
    tvl: "$39.83m",
  },
];

const TokenSection = () => {
  return (
    <div className=" bg-gray-900 text-white p-5 mx-auto w-[90%] rounded">
      {/* Header */}
      <div className="flex justify-between text-gray-300 mb-4">
        <div className="text-lg">
          <p>
            Volume 24H: <span className="text-red-500">↓$860.60m</span>
          </p>
        </div>
        <div className="text-lg">
          <p>
            Fees 24H: <span className="text-red-500">↓$2.45m</span>
          </p>
        </div>
        <div className="text-lg">
          <p>
            TVL: <span className="text-green-500">↑$5.32b</span>
          </p>
        </div>
      </div>

      {/* Token Table */}
      <table className="w-full text-left">
        <thead className="border-b border-gray-700">
          <tr className="text-gray-500">
            <th className="py-2">#</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Price Change</th>
            <th className="py-2">Volume 24H</th>
            <th className="py-2">TVL</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={token.name} className="border-b border-gray-800">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{token.name}</td>
              <td className="py-2">{token.price}</td>
              <td
                className={`py-2 ${
                  token.change.includes("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {token.change}
              </td>
              <td className="py-2">{token.volume}</td>
              <td className="py-2">{token.tvl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenSection;
