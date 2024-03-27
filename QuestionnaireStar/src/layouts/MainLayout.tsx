import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Flex } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import  styles from "./mainLayout.module.scss"
import Logo from "../components/Logo";
import UserInfo from "../components/UserInfo";


const MainLayout: FC = () => {
    return <>
    <Layout>
      <Header className={styles.header} >
        <div className={styles.left} >
            <Logo></Logo>
            </div> 
        <div className={styles.right}>
          <UserInfo></UserInfo>
        </div>
      </Header>
      <Content className={styles.main} >
        <Outlet></Outlet>
      </Content>
      <Footer  className={styles.footer}>访问卷星 &copy 2024 - present. Created by  悲伤的情歌</Footer>
    </Layout>
    </>
}

export default MainLayout;