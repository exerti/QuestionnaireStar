import  axios ,{ResType} from './axios'

//获取用户详情
export async  function getUserInfo  ():Promise<ResType>{
    const res = ( await axios.get(`/api/user/detail/`)) as  ResType
    return res

}

//登录
export async  function login(
    username:string,
    password:string,
    VerifyCode?:string,
):Promise<ResType>{
    const body ={ username ,password}
    const res = ( await axios.post(`/api/user/login`,body)) as  ResType
    return res
}

//注册
export async  function register(
    username:string,
    password:string,
    phonenumber:string,
    nickname?:string
):Promise<ResType>{
   const body ={ username ,password,nickname ,phonenumber}
   const res = ( await axios.post(`/api/user/register`,body)) as  ResType
   return res
}


//获取验证码

export async  function getVerifyCode(
):Promise<ResType>{
    const res = ( await axios.get(`/api/user/getCaptha`)) as  ResType
    return res
}