/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-12-08 22:53:18
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-12 11:50:59
 */
import React from "react";
// import { Button } from "antd";
import NewButton from "../NewButton"
import "./index.css";
import image1 from "../../assets/img/image1.png"
export default function Header() {
  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView({behavior:"smooth"}); }
    }
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        height: "100px",
        padding: "20px",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "700",
          fontSize: "32px",
        }}
      >
      <div style={{width:"50px", height:"50px",marginRight:"20px"}}>
        <img src={image1} style={{width:"100%", height:"100%"}}></img>
      </div>
        Film415
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="header-btn">Home</div>
        <div className="header-btn" onClick={()=>{scrollToAnchor("timeline")}}>Timeline</div>
        <div className="header-btn" onClick={()=>{scrollToAnchor("Comparison")}}>Comparison</div>
        <div className="header-btn" onClick={()=>{scrollToAnchor("changes")}}>Changes</div>
      </div>
      {/* <div
        style={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NewButton context="Explore"></NewButton>
      </div> */}
    </div>
  );
}
