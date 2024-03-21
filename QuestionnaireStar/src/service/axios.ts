import axios from "axios";
import {message} from "antd";
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // withCredentials: true

})

instance.interceptors.request.use(res=>{
    const resData =  (res.data || {}) as ResType
    const {code,msg,data} = resData
    if(code !== 0){
        if(msg){
            message.error(msg)
        }
    }
    return data as any
})
export default instance;

export  type  ResType = {
    code: number,
    msg?: string,
    data?: ResponseData
}

export type  ResponseData = {
    [key: string]:any
}