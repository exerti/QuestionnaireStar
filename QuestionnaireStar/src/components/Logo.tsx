import React, { FC, useEffect, useState } from "react";

import { Space, Typography } from 'antd';
import { Link } from "react-router-dom";
import { FormOutlined } from "@ant-design/icons";
import styles from "../styles/Logo.module.scss"
import { useGetUserInfo } from "../hooks/useGetUserInfo";
const { Title } = Typography;
const Logo: FC = () => {

    const {userName} =useGetUserInfo()
    const [pathname ,setpathname] =useState("/")
    useEffect(()=>{
      if(userName){
        setpathname('/manager/list')
      }else{
        setpathname('/')
      }
    },[userName])

    return <>
        <div className={styles.container}>
            <Link to={pathname}>
                <Space>
                    <Title> <FormOutlined /></Title>
                    <Title>阳光问卷</Title>
                </Space>
            </Link> </div>
    </>
}

export default Logo;