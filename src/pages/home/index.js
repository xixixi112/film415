/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-12-08 22:54:36
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-12 13:57:08
 */
import React, { useEffect, useState } from "react";
import { message } from "antd";
import BulletScreen, { StyledBullet } from "rc-bullets";
import Header from "../../components/Header";
import Context from "../../components/Context";
import Timeline from "../../components/Timeline";
import Changes from "../../components/Changes";
import Temp2 from "../../components/Temp2";
import Footer from "../../components/Footer";
import headImg from "../../assets/img/image11.png";
import { uploadcomment, querycomment } from "../../api/index";
export default function Home() {
  // 弹幕屏幕
  const [screen, setScreen] = useState([]);
  // 弹幕内容
  const [bullet, setBullet] = useState("");
  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    let s = new BulletScreen(".screen", { duration: 20,loopCount:"infinite" });
    setScreen(s);
    
  }, []);
  const queryList = async () => {
    // setBullet([])
    const { data } = await querycomment();
    const { commentList } = data;
    let len = commentList.length;
    let i = 0;
    const time = setInterval(() => {
      if (i < len) {
        let temp = JSON.parse(commentList[i]);
        screen.push({
          msg: temp,
          head: headImg,
          color: "#eee",
          size: "large",
          backgroundColor: "rgba(2,2,2,.3)",
        });
        i++;
      } else {
        clearInterval(time);
      }
    }, 1000);
  };
  useEffect(() => {
    queryList()
  }, [screen]);
  

  // 弹幕内容输入事件处理
  const handleChange = (value) => {
    setBullet(value);
  };
  // 发送弹幕
  const handleSend = async () => {
    if (!bullet) {
      message.info("Comments cannot be empty!");
      return null;
    }
    const { data } = await uploadcomment({ comment: bullet });
    message.success("Submitted successfully");
    if (bullet) {
      // push 纯文本
      // screen.push(bullet);
      // or 使用 StyledBullet
      // screen.push(
      //   <StyledBullet
      //     head={headUrl}
      //     msg={bullet}
      //     backgroundColor={"#fff"}
      //     size="large"
      //   />
      // );
      // or 还可以这样使用，效果等同使用 StyledBullet 组件
      screen.push({
        msg: bullet,
        head: headImg,
        color: "#eee",
        size: "large",
        backgroundColor: "rgba(2,2,2,.3)",
        
      });
    }
    setBullet("");
  };
  return (
    <div style={{ maxWidth: "100%",minWidth:"1400px", overflow: "hidden" }}>
      <Header></Header>
      <Context></Context>
      <Timeline></Timeline>
      <Changes></Changes>
      <div className="screen">
        <Temp2></Temp2>
      </div>
      <Footer
        handleSend={handleSend}
        handleChange={handleChange}
        bullet={bullet}
      ></Footer>
    </div>
  );
}
