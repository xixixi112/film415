/*
 * @Descripttion: 
 * @version: 
 * @Author: 韩震
 * @Date: 2022-10-31 17:03:39
 * @LastEditors: 韩震
 * @LastEditTime: 2022-12-12 12:02:01
 */
// 导入axios
import axios from "axios"
import Nprogress from 'nprogress'


// 创建新的axios实例
const service = axios.create({
    baseURL: "http://43.143.227.121:10086",
    // baseURL: "http://localhost:10086",
    // 超时时间
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
    // config.data = JSON.stringify(config.data);
    if(!config.headers){
        config.headers = {
            "Content-Type": "application/json"    //设置请求头请求格式为JSON
        }
    }
    // config.headers.Authorization = window.sessionStorage.getItem("token")
    Nprogress.start()  // 在请求拦截器中展示进度条
    return config
}, error => {
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    Nprogress.done() // 在响应拦截器中隐藏进度条
    return response
}, error => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
        // 1.公共错误处理
        // 2.根据响应码具体处理
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误,未找到该资源'
                break;
            case 405:
                error.message = '请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务器端出错'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break;
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'http版本不支持该请求'
                break;
            default:
                error.message = `连接错误${error.response.status}`
        }
    } else {
        // 超时处理
        if (JSON.stringify(error).includes('timeout')) {
            // Message.error('服务器响应超时，请刷新当前页')
        }
        error.message = '连接服务器失败'
    }

    // Message.error(error.message)
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response)
})
//4.导出文件
export default service