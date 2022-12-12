/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-11-25 17:14:46
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-08 22:52:06
 */
import React, { useState, useEffect } from "react";
import { queryAllData } from "../../api";
import Card from "../../components/Card";
export default function Home() {
  const [titleSet, setTitleSet] = useState({});
  const [annotations, setAnnotations] = useState([]);
  const [sources, setSources] = useState([]);
  const getData = async () => {
    const { data: resData } = await queryAllData({});
    const { annotations, sources } = resData;
    setAnnotations(annotations);
    setSources(sources);
    let temp = {};
    annotations.forEach((item) => {
      temp[item.id] = [item.title, item.type];
    });
    setTitleSet(temp);
    console.log(resData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <></>
  )
  // return (
  //   <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row",justifyContent:"space-around" }}>
  //     {annotations.map((item) => {
  //       return <Card details={item} key={item.id} titleSet={titleSet}></Card>;
  //     })}
  //   </div>
  // );
}
