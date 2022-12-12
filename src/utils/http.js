/*
 * @Descripttion: 
 * @version: 
 * @Author: 韩震
 * @Date: 2022-10-31 17:04:19
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-10 14:05:57
 */
import request from "./request"
const http = {
    /**
     * methods:请求方法
     * @param url 请求地址
     * @param params 请求参数
     */
    get(url, params) {
        const config = {
            method: "get",
            url: url
        }
        if (params) {
            config.params = params
        }
        return request(config)
    },
    post(url, data, headers=null) {
        const config = {
            method: "post",
            url: url,
            headers:headers
        }
        if (data) {
            config.data = data
        }
        return request(config)
    },
    put(url, params) {
        const config = {
            method: 'put',
            url: url,
            headers: {
                'Content-Type': "multipart/form-data"
            }
        }
        if (params) config.data = params
        return request(config)
    },
    delete(url, params) {
        const config = {
            method: 'delete',
            url: url
        }
        if (params) config.params = params
        return request(config)
    }
}

export default http