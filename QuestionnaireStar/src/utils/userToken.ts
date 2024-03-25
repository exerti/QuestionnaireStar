
/**
 * @description 用户token工具类
 */

const KEY ='userToken'

// 获取用户token
export const getUserToken = () => {
    return localStorage.getItem(KEY)
}

// 设置用户token
export const setUserToken = (token: string) => {
    return localStorage.setItem(KEY, token)
}

// 删除用户token
export const removeUserToken = () => {
    return localStorage.removeItem(KEY)
}