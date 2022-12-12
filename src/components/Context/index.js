/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-12-09 11:49:20
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-12 13:15:18
 */
import React from "react";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.jpg";
import image4 from "../../assets/img/image4.png";
import image5 from "../../assets/img/image5.jpg";
import image6 from "../../assets/img/image6.png";
import image13 from "../../assets/img/image13.jpg";
export default function Context() {
  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          minWidth:"1400px",
          height: "470px",
          marginLeft: "180px",
          position: "relative",
          // display: "flex",
          marginBottom: "30px",
        }}
      >
        <div style={{
          position:"absolute",
          top:"59%",
          left:"-12%"
        }}>
          <img src={image13} style={{
            width:"150px",
            height:"150px"
          }}></img>
        </div>
        <div
          style={{
            // width: "50%",
            // paddingLeft: "80px",
            fontFamily: "Paytone One",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "60px",
            // height: "100px",
            paddingTop: "20px",
            // display: "flex",
          }}
        >
          <div>Chinese Television</div>
          <div>Commercial</div>
          <div>Advertising Archives</div>
        </div>
        <div
          style={{
            // width: "50%",
            marginTop: "20px",
            fontFamily: "Paytone One",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "26px",
            // height: "100px",
            paddingTop: "20px",
            // display: "flex",
          }}
        >
          <div>"The air we breathe is made up of nitrogen,</div>
          <div>oxygen, and advertising."</div>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              marginLeft: "10px",
              backgroundColor: "#000",
              width: "230px",
              height: "50px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={()=>window.open("https://youtu.be/onVNqme71y4")}
          >
            <div
              style={{
                height: "25px",
                fontSize: "20px",
                lineHeight: "25px",
              }}
            >
              Start with
            </div>
            <div
              style={{
                height: "25px",
                fontSize: "20px",
                lineHeight: "25px",
              }}
            >
              memory
            </div>
          </div>
          <div
            style={{
              width: "90px",
              height: "20px",
              position: "absolute",
              top: "30%",
              left: "19%",
            }}
          >
            <img
              src={image6}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></img>
          </div>
          <div
            style={{
              width: "60px",
              height: "60px",
              position: "absolute",
              top: "-10%",
              left: "28%",
            }}
          >
            <img
              src={image1}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></img>
          </div>
          <div
            style={{
              width: "120px",
              height: "100px",
              position: "absolute",
              top: "-100%",
              left: "38%",
            }}
          >
            <img
              src={image4}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></img>
          </div>
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            top: "0",
            left: "45%",
            zIndex: "9",
          }}
        >
          <img
            src={image2}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        </div>
        <div
          style={{ position: "absolute", top: "10%", left: "53%", zIndex: "0" }}
        >
          <img src={image5} style={{ width: "550px", height: "540px" }}></img>
          <img
            src={image3}
            style={{
              width: "240px",
              height: "230px",
              position: "absolute",
              top: "32%",
              left: "39%",
            }}
          ></img>
        </div>
      </div>
      <div
        style={{
          maxWidth: "100%",
          height: "400px",
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "32px",
          position: "relative",
          padding: "30px 90px",
          fontWeight: "600",
        }}
      >
        <div>Project Overview:</div>
        <div
          style={{
            wordBreak: "break-word",
            whiteSpace: "pre-line",
            fontWeight: "600",
            fontSize: "32px",
          }}
        >
          This website will research the history of Chinese television
          commercial advertising. Due to the Cultural Revolution, the Chinese
          television advertising industry began in 1979 and had forty years of
          history. China has undergone numerous dramatic changes in the past 40
          years, including the transformation of its economic system. One of the
          questions this site will explore is how the post-1993 socialist market
          economy system has influenced advertising aesthetics. The other
          question is about the difference in television advertising styles
          between China Central Television(CCTV) and British Broadcasting
          Corporation(BBC).
        </div>
      </div>
    </>
  );
}
