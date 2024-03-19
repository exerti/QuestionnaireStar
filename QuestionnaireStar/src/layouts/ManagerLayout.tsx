import React, { FC } from "react";
import { Outlet ,useLocation ,useNavigate} from "react-router-dom";

import { Button, Layout, Space, Divider } from 'antd';
import {PlusOutlined ,BarsOutlined,StarOutlined,DeleteOutlined ,BlockOutlined} from '@ant-design/icons';
import styles from './mannager.module.scss'



const ManagerLayout: FC = () => {

    const { pathname} = useLocation();
    const nav = useNavigate();

    return <>
        <div className={styles.container}>
            <Layout className={styles.left}>
               <Space direction="vertical">
               <Button type="primary" size="large"  icon={<PlusOutlined />} onClick={ ()=>nav("/question")}>新建问卷</Button>
                <Divider />
                <Button type={pathname.endsWith("/manager/list")? "default" :"text" } size="large" icon={<BarsOutlined /> }  onClick={()=> nav("/manager/list")}>我的问卷</Button>
                <Button type={pathname.endsWith("/manager/star")? "default" :"text" } size="large"  icon={<StarOutlined />}  onClick={()=> nav("/manager/star")}>星标问卷</Button>
                {/* <Button type="primary" size="large" icon={<BlockOutlined />}  onClick={()=> nav("/manager/stat")}>问卷统计</Button> */}
                <Button type={pathname.endsWith("/manager/trash")? "default" :"text" } size="large"  icon={<DeleteOutlined/>} onClick={()=> nav("/manager/tarsh")}>回收站</Button>
                
               </Space>
            </Layout>

            <Layout className={styles.right}>
                <Outlet />
            </Layout>
        </div>
    </>
}

export default ManagerLayout;