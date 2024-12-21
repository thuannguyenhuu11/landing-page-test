import { createContext, useState, ReactNode } from 'react';
import data1 from '@/database/db.json';
import data2 from '@/database/db2.json';
import data3 from '@/database/db3.json';
import data4 from '@/database/db4.json';
import data5 from '@/database/db5.json';
import { ICoinData } from '@/type/type.common';

const coinDatas: { [key: string]: ICoinData } = { data1, data2, data3, data4, data5 };

interface DataContextProps {
    coinData: ICoinData;
    setCoinData: React.Dispatch<React.SetStateAction<ICoinData>>;
    switchCoinData: (symbol: string) => void;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [coinData, setCoinData] = useState<ICoinData>(coinDatas.data1);

    const switchCoinData = (symbol: string) => {
        for (const key in coinDatas) {
            if (coinDatas[key as keyof typeof coinDatas]['Meta Data']['2. Symbol'] === symbol) {
                setCoinData(coinDatas[key]);
                break;
            }
        }
    };

    return <DataContext.Provider value={{ coinData, setCoinData, switchCoinData }}>{children}</DataContext.Provider>;
};
