import Style from "./PageInfinity.module.scss";
import { useState, useEffect } from "react";

type Album = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const PageInfinity = () => {
  const [rawData, setRawData] = useState<Album[]>([]);
  const [listData, setListData] = useState<Album[]>([]);
  const [lastId, setLastId] = useState<number>(-1);

  // 최초 한 번 실행
  useEffect(() => {
    getRawData();
  }, []);
  // rawData 변화 감
  useEffect(() => {
    sliceListData();
  }, [rawData]);

  const getRawData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();

    setRawData(data);
  };

  const sliceListData = () => {
    if (lastId === -1) {
      const cutList = rawData.slice(0, 100);
      console.log(cutList);
      //setLastId(cutList[cutList.length - 1].id);
      setListData(cutList);
    }
    // else {
    //   const lastDataIndex = rawData.findIndex((item) => item.id === lastId);
    //   const cutList = rawData.slice(lastDataIndex + 1, lastDataIndex + 100);
    //   const newList = [...listData, ...cutList];
    //   setLastId(cutList[cutList.length - 1].id);
    //   setListData(newList);
    // }
  };

  return (
    <ul className={Style.wrapper}>
      {listData.map((item) => {
        return (
          <li key={item.id}>
            d
            <img src="" alt="" />
          </li>
        );
      })}
    </ul>
  );
};

export default PageInfinity;
