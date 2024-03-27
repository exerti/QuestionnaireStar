import { Button, Space } from "antd";
import React, {
    FC
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeUserToken } from "../utils/userToken";
import { useRequest } from "ahooks";
import { UserOutlined } from "@ant-design/icons";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { useDispatch } from "react-redux";
import  {loginOutReducer,loginReducer} from '../store/user';



const UserInfo = () => {

    // const { data } = useRequest(getUserInfo)
    // const { userName, userimage } = data?.data || {}
    const nav = useNavigate()

    const {userName,password} = useGetUserInfo();
    const dispatch = useDispatch()
    

    function handleClick() {
        dispatch(loginOutReducer())
        removeUserToken()
        nav('/login')
    }

    const user = (
        <>
            <Space>
                <span style={{
                    color: 'white'
                }}>
                    <UserOutlined />
                    {userName}</span>
                <Button type="link" onClick={handleClick} > 退出</Button>
            </Space>

        </>
    )

    // 已经登录的状态 
    return <>
        {
            userName ? user : <Link to='/login'>登录 </Link>
        }



    </>
}

export default UserInfo;