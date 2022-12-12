/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-12-09 22:11:04
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-12 13:25:02
 */
import React from "react";
import change1 from "../../assets/img/change1.jpg";
import change2 from "../../assets/img/change2.png";
import change3 from "../../assets/img/change3.png";
import change4 from "../../assets/img/change4.jpg";
import change5 from "../../assets/img/change5.jpg";
import image11 from "../../assets/img/image11.jpg";
// import image9 from "../../assets/img/image9.jpg";
import NewButton from "../NewButton";
export default function Changes() {
  return (
    <div
      style={{
        maxWidth: "100vw",
        padding: "0 200px",
        marginTop: "30px",
      }}
      id={"changes"}
    >
      <div
        style={{
          minWidth: "1020px",
          width:"1020px",
          height: "750px",
          backgroundColor: "#f4e6be",
          padding: "2vh 5vw",
          position: "relative",
        }}
      >
        <p
          style={{
            maxWidth: "70%",
            // padding: "0 200px",
            fontSize: "35px",
            fontWeight: "700",
          }}
        >
          {/* Over a century of experience solving pest problems. */}
          Changes
        </p>
        <div style={{ width: "400px" }}>
          <img
            src={change1}
            style={{
              width: "400px",
              height: "220px",
              borderRadius: "100px",
            }}
            onClick={() => {
              window.open("https://youtu.be/rupyl0COLx4?t=494");
            }}
          ></img>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "700",
              color: "37474f",
            }}
          >
            90s Bondi Band-Aid ad
          </p>
        </div>
        <div
          style={{
            width: "400px",
            position: "absolute",
            left: "60%",
            top: "17%",
          }}
        >
          <img
            src={change2}
            style={{
              width: "400px",
              height: "220px",
              borderRadius: "100px",
            }}
            onClick={() =>
              window.open(
                "https://www.bilibili.com/video/BV1QD4y1h7iw/?share_source=copy_web&vd_source=3220ae434d3797ea71b664dc0f41fab6"
              )
            }
          ></img>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "700",
              color: "37474f",
            }}
          >
            2003 Bondi Band-Aid ad
          </p>
        </div>
        <div
          style={{
            width: "350px",
            position: "absolute",
            left: "63%",
            top: "58%",
          }}
        >
          <img
            src={change3}
            style={{
              width: "350px",
              height: "270px",
              borderRadius: "50px",
            }}
            onClick={() =>
              window.open(
                "https://www.bilibili.com/video/BV1K8411V7hC/?share_source=copy_web&vd_source=3220ae434d3797ea71b664dc0f41fab6"
              )
            }
          ></img>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "700",
              color: "37474f",
            }}
          >
            2017 Bondi Band-Aid ad
          </p>
        </div>
        <div style={{ position: "absolute", left: "45%", top: "28%" }}>
          <img
            src={change4}
            style={{
              width: "120px",
              height: "50px",
            }}
          ></img>
        </div>
        <div style={{ position: "absolute", left: "76%", top: "51%" }}>
          <img
            src={change5}
            style={{
              width: "35px",
              height: "50px",
            }}
          ></img>
        </div>
        <div
          style={{
            width: "350px",
            // height: "300px",
            position: "absolute",
            bottom: "10%",
            left: "20%",
            fontSize: "20px",
          }}
        >
          The development of the market economy has given the same goods an
          utterly different advertising style at other times.
          <p></p>
          In the 90s, advertising color and content were relatively single. With
          the development of time, advertising in the new century began to have
          more drama, which can better attract the audiences.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          <img
            src={image11}
            style={{
              width: "200px",
              height: "200px",
            }}
          ></img>
        </div>
        <div style={{position: "absolute", top:"12%", left:"66%"}}>Click on the image to jump to the ad</div>
      </div>
    </div>
  );
}
