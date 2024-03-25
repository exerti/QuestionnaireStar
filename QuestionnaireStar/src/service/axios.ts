import axios from "axios";
import { message } from "antd";
import { getUserToken } from "../utils/userToken";
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // withCredentials: true

})

instance.interceptors.request.use(config => {
    config.headers['Authorization'] =  `Bearer  ${getUserToken()} `|| ''
    return config as any
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(res => {
    const resData = (res.data || {}) as ResType
    const { code, msg, data } = resData
    if (code === 200) {
        message.success(msg)

    } else {
        if (msg) {
            message.error(msg)
        }
        throw new Error(msg)
    }
    return resData as any
})

export default instance;

export type ResType = {
    code: number,
    msg?: string,
    data?: ResponseData
}

export type ResponseData = {
    [key: string]: any
}