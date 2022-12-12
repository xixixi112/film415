/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-12-10 11:28:00
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-10 12:07:52
 */
import React from "react";
import "./idnex.css"
export default function NewButton(props) {
  const {context, handleSend} = props
  return (
    <div>
      <div className="win">
        <div className="border_corner border_corner_left_top"></div>
        <div className="border_corner border_corner_right_top"></div>
        <div className="border_corner border_corner_left_bottom"></div>
        <div className="border_corner border_corner_right_bottom"></div>
        <div className="main">
          <div className="explore" onClick={()=>handleSend?handleSend():null}>{context}</div>
        </div>
      </div>
    </div>
  );
}
