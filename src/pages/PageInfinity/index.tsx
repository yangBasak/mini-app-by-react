import Style from "./PageInfinity.module.scss";
import { useState, useEffect } from "react";

type Album = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
/**
 * IntersectionObserver API
 * https://velog.io/@elrion018/%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C-%EB%8A%90%EB%82%80-%EC%A0%90%EC%9D%84-%EA%B3%81%EB%93%A4%EC%9D%B8-Intersection-Observer-API-%EC%A0%95%EB%A6%AC
 * http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/
 *
 */
const PageInfinity = () => {
  const [rawData, setRawData] = useState<Album[]>([]);
  const [listData, setListData] = useState<Album[]>([]);
  const [lastId, setLastId] = useState<number>(-1);

  useEffect(() => {
    getRawData();
  }, []);

  useEffect(() => {
    if (rawData.length === 0) return;
    sliceListData();
  }, [rawData]);

  const getRawData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();

    setRawData(data);
  };

  const sliceListData = () => {
    if (lastId === -1) {
      const cutList = rawData.slice(0, 10);
      setLastId(cutList[cutList.length - 1].id);
      setListData(cutList);
    } else {
      const lastDataIndex = rawData.findIndex((item) => item.id === lastId);
      const cutList = rawData.slice(lastDataIndex + 1, lastDataIndex + 100);
      const newList = [...listData, ...cutList];
      setLastId(cutList[cutList.length - 1].id);
      setListData(newList);
    }
  };

  return (
    <ul className={Style.wrapper}>
      {listData.map((item) => {
        return (
          <li key={item.id}>
            <img src={item.url} alt="image" />
          </li>
        );
      })}
    </ul>
  );
};

export default PageInfinity;
