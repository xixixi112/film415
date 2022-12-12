/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-12-09 13:38:34
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-12 13:33:05
 */
import React from "react";
import "./index.css";
import { Chrono } from "react-chrono";
import image7 from "../../assets/img/image7.jpg";
import T1 from "../../assets/img/T1.png";
import T2 from "../../assets/img/T2.png";
import T3 from "../../assets/img/T3.png";
import T4 from "../../assets/img/T4.png";
import T5 from "../../assets/img/T5.png";
import T6 from "../../assets/img/T6.png";
import T7 from "../../assets/img/T7.png";
import T8 from "../../assets/img/T8.png";
import image12 from "../../assets/img/image12.jpg";
export default function Timeline() {
  const items = [
    {
      title: "1941",
      cardTitle: "First television advertisement- Bulova Watch Company (1941)",
      url: "https://youtu.be/ho2OJfXkvpI ",
      cardSubtitle: `The first on-screen commercial was a 10-second Bulova watch commercial that aired 75 years 
    ago during a baseball game between the Brooklyn Dodgers and Philadelphia Phillies.`,
      media: {
        type: "IMAGE",
        source: {
          url: T1,
        },
      },
    },
    {
      title: "1979.1.25",
      cardTitle:
        " Ginseng and Gui Yang Rong Wine Advertisement (1979.1.25） First TV commercial in mainland  China)",
      // url: "https://youtu.be/ho2OJfXkvpI ",
      cardSubtitle: `Ginseng and Gui Yang Rong Wine Advertisement (1979.1.25) which is the first TV commercial in China. Since the master tapes were lost, only the production staff of the time could recall and draw the illustrations.`,
      media: {
        type: "IMAGE",
        source: {
          url: T2,
        },
      },
    },
    {
      title: "March 15, 1979",
      cardTitle:
        "On March 15, 1979, Rado became the first foreign brand to advertise in the Chinese market after the reform and opening up.",
      url: "https://youtu.be/tX_G5fZC9nI?t=18",
      cardDetailedText: `On March 15, 1979, Rado became the first foreign brand to advertise in the Chinese market after the reform and opening up.`,
      media: {
        type: "IMAGE",
        source: {
          url: T3,
        },
      },
    },
    {
      title: "1979",
      cardTitle:
        "The first animated ➕ advertisement was introduced on CCTV in 1979",
      url: "https://www.bilibili.com/video/BV11K411K7qo/?share_source=copy_web&vd_source=3220ae434d3797ea71b664dc0f41fab6&t=1",
      cardDetailedText: `In 1979, just entered the Chinese market shortly after the electronic brand Casio (CASIO) wanted to advertise on CCTV. At that time, this is the most effective means of publicity. But before that, there was no such precedent, so that also carried out a long negotiation. After all, it is impossible to broadcast a commercial for no reason. Because of this, the two sides finally found a countermeasure: CCTV will help Casio's advertising, but the condition is that Casio needs to obtain the "Iron Arm Astro" copyright.`,
      media: {
        type: "IMAGE",
        source: {
          url: T4,
        },
      },
    },
    {
      title: "1987",
      cardTitle: " 80's Classic Swallow Dance VCR commercial",
      url: "https://youtu.be/zTOADCA5950?t=1",
      cardDetailedText: `In the beginning, the factory spared no effort to make a general promotion for the "Swallow Dance" radio-cassette recorder, advertised in various provincial and municipal TV stations and newspapers simultaneously during the agreed time, creating significant momentum on eight fronts. It is said that the factory spent nearly 2 million yuan (CAD 400,000) on advertising in 1987.`,
      media: {
        type: "IMAGE",
        source: {
          url: T5,
        },
      },
    },
    {
      title: "1990",
      cardTitle: "1990 China's first celebrity-endorsed advertisement",
      url: "https://www.bilibili.com/video/BV1rv411z7w7/?share_source=copy_web&vd_source=3220ae434d3797ea71b664dc0f41fab",
      cardDetailedText: `In early 1990, due to the lack of funds for the second China Theatre Festival. The famous Chinese actor Li Muran endorsed the traditional Chinese stomach medicine and was paid at that time to sponsor the 2nd Chinese Theatre Festival, while I only got a 700 Yuan (about CAD135) Walkman. Due to the disappointment of his endorsement, Li Muran never took any more commercials.`,
      media: {
        type: "IMAGE",
        source: {
          url: T6,
        },
      },
    },
    {
      title: "1991",
      cardTitle:
        "China's advertising history in the nineties is very representative of advertising( After the Socialist market economy)",
      url: "https://youtu.be/a53ykW30PlY",
      cardDetailedText: `In 1991, Guangxi Nanfang Children's Food Factory launched this 30-second black sesame paste commercial "Calling Chapter", with an ingenious creative concept and the main focus on the warmth between people, this theme is the first time in China's advertising industry so unprecedented success, but also countless people's childhood memories of the most beautiful television works.`,
      media: {
        type: "IMAGE",
        source: {
          url: T7,
        },
      },
    },
    {
      title: "1994",
      // url: "https://youtu.be/ho2OJfXkvpI ",
      cardDetailedText: `China Network Television (CCTV) holds its first advertising tender in 1994.
      `,
      media: {
        type: "IMAGE",
        source: {
          url: T8,
        },
      },
    },
  ];
  return (
    <div
      id={"timeline"}
      style={{
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "150px",
          fontSize: "60px",
          lineHeight: "150px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Timeline
      </div>
      <div>
        <div
          style={{ maxWidth: "100%", padding: "0 80px", marginBottom: "50px" }}
        >
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            hideControls={true}
            theme={{
              cardBgColor: "#F4E6BE",
            }}
            classNames={{
              cardSubTitle: "cardSubTitle",
            }}
          />
        </div>
      </div>
      <div
        style={{
          maxWidth: "100%",
          paddingLeft: "80px",
          display: "flex",
        }}
        id={"Comparison"}
      >
        <div
          style={{
            minWidth: "40%",
            height: "450px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={image7}
          ></img>
        </div>
        <div
          style={{
            minWidth: "60%",
            maxWidth: "60%",
            padding: "0px 80px 10px 40px",
            height: "450px",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              width: "100%",
            }}
          >
            <div
              style={{
                textAlign: "center",
                width: "95%",
                height: "50px",
                lineHeight: "50px",
              }}
            >
              Comparison
            </div>
            <div
              style={{
                width: "95%",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    width: "35%",
                    minWidth:"287px",
                    height: "400px",
                    paddingLeft: "10px",
                    backgroundColor: "#F4E6BE",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                  }}
                >
                  <div style={{height:"50px",width:"95%", textAlign:'center'}}>BBC Television</div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      height:"180px"
                      // width: "100%",
                    }}
                  >
                    The profit model relies on the sale of TV lisence and paid
                    content channels.
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      // width: "100%",
                      color: "red",
                    }}
                  >
                    Advertising is not allowed
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      // width: "100%",
                      color: "red",
                      lineHeight: "25px",
                    }}
                  >
                    <a href="https://twitter.com/FT/status/1216402528390258694">
                      Learn More{" "}
                      <img
                        style={{
                          marginLeft: "10px",
                          width: "25px",
                          height: "20px",
                        }}
                        src={image12}
                      ></img>
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    width: "35%",
                    minWidth:"287px",
                    height: "400px",
                    paddingLeft: "10px",
                    backgroundColor: "#F4E6BE",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                  }}
                >
                  <div style={{height:"50px", width:"95%", textAlign:'center'}}>CCTV</div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      height:"180px",
                      // width: "100%",
                      
                    }}
                  >
                    The profit model is to attract advertisers to invest.
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      // width: "100%",
                      color: "#ED5E5E",
                    }}
                  >
                    Advertising is allowed
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      // width: "100%",
                      color: "red",
                    }}
                  >
                    <a href="http://www.china.org.cn/english/BAT/27191.htm">
                      Learn More{" "}
                      <img
                        style={{ marginLeft: "10px", width: "25px",height: "20px",}}
                        src={image12}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
