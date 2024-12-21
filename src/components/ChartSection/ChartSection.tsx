import ChartPrice from '../ChartPrice/ChartPrice';
import ChartVolume from '../ChartVolume/ChartVolume';

const ChartSection = () => {
    return (
        <div className="flex-col mx-auto my-5 2xl:my-10 w-[90%]">
            <h1 className="text-white">Uniswap Overview</h1>

            <div className="flex flex-col gap-10 mt-10 xl:flex-row">
                <ChartPrice />
                <ChartVolume />
            </div>
        </div>
    );
};

export default ChartSection;
