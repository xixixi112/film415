/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-11-25 20:16:04
 * @LastEditors: 韩震
 * @LastEditTime: 2022-11-25 23:50:13
 */
import React from "react";
import "./index.css";
export default function Card(props) {
  const { details, titleSet } = props;
  //   console.log(details)
  const showhtml = (htmlString) => {
    const html = { __html: htmlString };
    return <div dangerouslySetInnerHTML={html}></div>;
  };
  const showImage = (images) => {
    if (!Array.isArray(images)) {
      return null;
    }
    return (
      <img
        src={
          "https://res.cloudinary.com/memory-studio/image/fetch/w_1024,q_auto,f_auto/https://alllightexpanded.com/attachments/" +
          images[0].url
        }
        style={{ width: "100%", height: "100%" }}
      ></img>
    );
  };
  const jumpVideoURL = (video) => {
    console.log("++++++");
    window.open(video);
  };
  const showVideo = (video) => {
    if (!video) {
      return null;
    }
    console.log(video);
    if (video[0] === "/") {
      video = "https://alllightexpanded.com/attachments/" + video;
    }
    return (
      <>
        <div style={{ minWidth: "400px", maxWidth: "400px" }}>
          <iframe
            width="400"
            height="315"
            src={video}
            title="video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
  };
  const showRelated = (related) => {
    console.log(related);
    return related.map((item) => {
      return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {titleSet[item] && (
            <>
              <div style={{ minWidth: "250px" }}>{titleSet[item][0]}</div>
              <div style={{ color: "#787878", marginLeft: "20px" }}>
                {titleSet[item][1]}
              </div>
            </>
          )}
        </div>
      );
    });
  };
  return (
    <div
      style={{
        minWidth: "400px",
        minHeight: "400px",
        maxWidth: "400px",
        // backgroundColor: "#bfa",
        marginRight: "20px",
        marginBottom: "20px",
        padding: "20px",
      }}
      className="card"
    >
      <div style={{ paddingTop: "10px", borderTop: "2px solid #787878" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "10px soild red",
          }}
        >
          <div>{details.label}</div>
          <div
            style={{ maxWidth: "300px", fontWeight: "600", fontSize: "16px" }}
          >
            {details.title}
          </div>
          <div>{titleSet[details.id][1]}</div>
        </div>
        <div style={{marginTop:"10px"}}>
          {showImage(details.images)}
          {showVideo(details.video)}
          {showhtml(details.body)}
        </div>
        <div>
          {/* <div>SOURCE:</div> */}
          <div></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <div
            style={{ minWidth: "50px", marginRight: "10px", color: "#787878" }}
          >
            RELATED
          </div>
          <div>{showRelated(details.related)}</div>
        </div>
      </div>
    </div>
  );
}
