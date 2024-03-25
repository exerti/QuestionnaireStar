import { Button, Space } from "antd";
import React, {
    FC
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeUserToken } from "../utils/userToken";
import { useRequest } from "ahooks";
import { getUserInfo } from "../service/user";
import { UserOutlined } from "@ant-design/icons";





const UserInfo = () => {

    const { data } = useRequest(getUserInfo)
    const { userName, userimage } = data?.data || {}
    const nav = useNavigate()
    function handleClick() {
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