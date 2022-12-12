/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-12-09 23:30:48
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-10 13:05:35
 */
import React from "react";
import { Input } from "antd";
import image10 from "../../assets/img/image10.jpg";
import image1 from "../../assets/img/image1.png";
import NewButton from "../NewButton";
export default function Footer(props) {
  const {handleSend, handleChange, bullet} = props
  const { TextArea } = Input;

  
  const handleValueChange = (event) =>{
    // console.log(event.target.value)
    handleChange(event.target.value)
    
  }
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        maxWidth: "100%",
        // padding: "0 200px",
        // lineHeight:"100px",
        fontSize: "20px",
        fontWeight: "700",
        marginTop: "30px",
        display: "flex",
        color: "#fff",
        justifyContent: "space-around",
        backgroundColor: "#3A3A3A",
      }}
    >
      <div style={{
        Width:"100px",
        // margin:"0 auto"
      }}>
        <img
          src={image1}
          style={{
            margin: "10px 10px 0 0",
            width: "25px",
            height: "25px",
          }}
        ></img>
        Film415
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "15px",
          // flexGrow:"1"
        }}
      >
        <span style={{marginRight:"10px"}}>Comment:</span>
        <TextArea
          id = {"text-area"}
          style={{
            backgroundColor:"#FDF4DB",
            width:"500px"
          }}
          onChange={handleValueChange}
          autoSize={{
            minRows: 6,
            maxRows: 6,
          }}
          value={bullet}
          placeholder="comment"
        />
        <div style={{
          // marginLeft:"20px",
          // width:"143px",
          // height:"143px",
          // backgroundColor:"red",
          // borderRadius:"10px",
          marginTop:"20px"
        }}>
          <NewButton context={"submit"} handleSend={handleSend}></NewButton>
        </div>
      </div>
      <div>
        <img src={image10}></img>
      </div>
    </div>
  );
}
