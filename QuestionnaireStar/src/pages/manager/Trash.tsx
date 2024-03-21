import React, { FC, useState } from "react";
import styles from "../../styles/common.module.scss"
import { Button, Card, Empty, Typography  } from "antd";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
const { Title } = Typography



const Trash: FC = () => {
    const [data, setData] = useState([]);
    const nav = useNavigate();
    useTitle("被删除的我的回收站-阳光问卷")
    return <>

        <div className={styles.header}>
            <div className={styles.left}>

            </div>
            <div className={styles.right}>

                <Button  >清空回收站</Button>
            </div>

        </div>
        <div className={styles.tarshContent}>
           
           <Card>
           {!data.length && <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 60 }}
                description={
                    <span>
                       <a href="#API">您还没有删除过问卷</a>
                    </span>
                }
            >
                <Button type="primary" onClick={()=>nav("/question")} >Create Now</Button>
            </Empty> }
           </Card>
           <Card >被删除的问卷保留6个月后将被彻底删除，无法再恢复运行！</Card>
        </div>
    </>
}

export default Trash;