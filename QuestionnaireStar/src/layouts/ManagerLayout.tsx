import React, { FC  ,useState} from "react";
import { Outlet ,useLocation ,useNavigate} from "react-router-dom";

import { Button, Layout, Space, Divider, Affix  ,message} from 'antd';
import {PlusOutlined ,BarsOutlined,StarOutlined,DeleteOutlined ,BlockOutlined} from '@ant-design/icons';
import styles from './mannager.module.scss'
import { createQuestion } from "../service/question";
import { useRequest} from 'ahooks'


const ManagerLayout: FC = () => {
    const nav = useNavigate();
    const { pathname} = useLocation();
    
    // const [loading ,setLoading] = useState(false);
    // async  function  newQuestion(){
    //     setLoading(true)
    //     const  res =  await createQuestion()
    //     console.log(res)
    //     let {id } = res.data ||{}
    //     nav(`/question/edit/${id}`)
    //     setLoading(false)
    //     nav(`/question/edit/${id}`)
    // }
    const {loading ,run:newQuestion} = useRequest(createQuestion,{
        manual:true,
        onSuccess(res){
            const {id } = res.data ||{}
            nav(`/question/edit/${id}}`)
            message.success("新建成功")
        }
    })


    return <>
        <div className={styles.container}>
            <Layout className={styles.left}>
               <Affix offsetTop={20}><Space direction="vertical">
               <Button type="primary" size="large"  icon={<PlusOutlined />} onClick={ newQuestion}  disabled={loading}>新建问卷</Button>
                <Divider />
                <Button type={pathname.endsWith("/manager/list")? "default" :"text" } size="large" icon={<BarsOutlined /> }  onClick={()=> nav("/manager/list")}>我的问卷</Button>
                <Button type={pathname.endsWith("/manager/star")? "default" :"text" } size="large"  icon={<StarOutlined />}  onClick={()=> nav("/manager/star")}>星标问卷</Button>
                {/* <Button type="primary" size="large" icon={<BlockOutlined />}  onClick={()=> nav("/manager/stat")}>问卷统计</Button> */}
                <Button type={pathname.endsWith("/manager/trash")? "default" :"text" } size="large"  icon={<DeleteOutlined/>} onClick={()=> nav("/manager/tarsh")}>回收站</Button>
                
               </Space></Affix>
            </Layout>

            <Layout className={styles.right}>
                <Outlet />
            </Layout>
        </div>
    </>
}

export default ManagerLayout;