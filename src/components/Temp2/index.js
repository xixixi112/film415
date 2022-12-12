/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-12-09 22:46:26
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-10 23:22:09
 */
import React from "react";
import {
  EditOutlined,
  SmileOutlined,
  FileOutlined,
  HeartOutlined,
} from "@ant-design/icons";
export default function Temp2() {
  return (
    <div
      style={{
        maxWidth: "100%",
        height: "350px",
        padding: "0 200px",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "50%",
        }}
      >
        <div
          style={{
            fontSize: "50px",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          {/* We’re not Happy, Until You’re Happy */}
          Danmu Area
        </div>
        {/* <div
          style={{
            maxWidth: "100%",
            fontSize: "16px",
            fontWeight: "400",
            marginBottom: "40px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          morbi donec lacus ut amet, scelerisque ornare. In nisl sapien amet,
          eget semper in. Tempus porta justo vulputate sagittis vulputate
          accumsan vitae, neque, ornare.
        </div>
        <div>
          <a href="www.baidu.com">Explore what makes Us different</a>
        </div> */}
        <p
          style={{
            color: "#636363",
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          Welcome to leave your comments.
        </p>
        <div
          style={{
            color: "#636363",
            fontSize: "25px",
            fontWeight: "400",
          }}
        >
          Thank you for taking the time to view.If you have any questions you
          can e-mail me through 17cw56@queensu.ca
        </div>
      </div>

      <div
        style={{
          marginLeft: "10%",
          paddingTop: "20px",
          width: "40%",
          maxWidth: "40%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "45%",
            height: "120px",
            backgroundColor: "#3A3A3A",
            padding: "25px 25px",
            boxSizing: "border-box",
            color: "#fff",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <div style={{ fontSize: "50px", fontWeight: "700" }}>
            <EditOutlined />
          </div>
          {/* <div style={{fontSize:"16px",fontStyle:"italic"}}>
            Years in Business
            </div> */}
        </div>
        <div
          style={{
            width: "45%",
            height: "120px",
            backgroundColor: "#3A3A3A",
            padding: "25px 25px",
            boxSizing: "border-box",
            color: "#fff",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <div style={{ fontSize: "50px", fontWeight: "700" }}>
            <SmileOutlined />
          </div>
          {/* <div style={{fontSize:"16px",fontStyle:"italic"}}>
            Locations Coverd
            </div> */}
        </div>
        <div
          style={{
            width: "45%",
            height: "120px",
            backgroundColor: "#3A3A3A",
            padding: "25px 25px",
            boxSizing: "border-box",
            color: "#fff",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <div style={{ fontSize: "50px", fontWeight: "700" }}>
            <FileOutlined />
          </div>
          {/* <div style={{fontSize:"16px",fontStyle:"italic"}}>
            Hours of Training
            </div> */}
        </div>
        <div
          style={{
            width: "45%",
            height: "120px",
            backgroundColor: "#3A3A3A",
            padding: "25px 25px",
            boxSizing: "border-box",
            color: "#fff",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <div style={{ fontSize: "50px", fontWeight: "700" }}>
            <HeartOutlined />
          </div>
          {/* <div style={{fontSize:"16px",fontStyle:"italic"}}>
            Support Staff
            </div> */}
        </div>
      </div>
    </div>
  );
}
