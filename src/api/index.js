/*
 * @Descripttion:
 * @version:
 * @Author: 韩震
 * @Date: 2022-11-25 12:11:39
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-10 14:55:31
 */
import http from "../utils/http";

// 请求数据
// const queryAllData = function (params) {
//   return http.get("api/content", params);
// };
const uploadcomment = (data) => {
  return http.post("/uploadcomment", data)
}
const querycomment = (params) => {
  return http.get("/querycomment",params)
}
export { uploadcomment,querycomment};
