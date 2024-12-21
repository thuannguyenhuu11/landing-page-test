import { createContext, useState, ReactNode } from "react";
import data1 from "@/database/db.json";
import data2 from "@/database/db2.json";
import data3 from "@/database/db3.json";
import data4 from "@/database/db4.json";
import data5 from "@/database/db5.json";
import data6 from "@/database/db6.json";
import data7 from "@/database/db7.json";
import data8 from "@/database/db8.json";
import data9 from "@/database/db9.json";
import data10 from "@/database/db10.json";
import { ICoinData } from "@/type/type.common";

const coinDatas: { [key: string]: ICoinData } = {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
};

interface DataContextProps {
  coinData: ICoinData;
  setCoinData: React.Dispatch<React.SetStateAction<ICoinData>>;
  switchCoinData: (symbol: string) => void;
  volumeTotal: string;
  setVolumeTotal: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [coinData, setCoinData] = useState<ICoinData>(coinDatas.data1);
  const [volumeTotal, setVolumeTotal] = useState<string>("$860.60m");

  const switchCoinData = (symbol: string) => {
    for (const key in coinDatas) {
      if (
        coinDatas[key as keyof typeof coinDatas]["Meta Data"]["2. Symbol"] ===
        symbol
      ) {
        setCoinData(coinDatas[key]);
        break;
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        coinData,
        setCoinData,
        switchCoinData,
        volumeTotal,
        setVolumeTotal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
