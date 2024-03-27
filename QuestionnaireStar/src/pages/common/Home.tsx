import React, { FC } from "react";
import { Button, Typography } from 'antd'
const { Title, Paragraph } = Typography;
import styles from "../../styles/Home.module.scss"
import { useNavigate } from "react-router-dom";



const Home: FC = () => {

    const nav = useNavigate()
    function handleClick() {
        nav("/login")
    }

    return <>
        <div className={styles.container}>
            <div className={styles.info}>
            <Title>问卷调查 | 在线投票</Title>
            <Paragraph>已累计创建问卷100分,回收答卷45份</Paragraph>
            <div>
                <Button type="text" className="primary"  onClick={handleClick}>
                    开始使用
                </Button>
                <Button>
                    市场调查
                </Button>
            </div>
            </div>
        </div>
    </>
}

export default Home;