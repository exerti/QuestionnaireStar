
import React, { FC, useState } from "react";
import Immer, { produce } from "immer";
import SurveyCard from "../../commonpents/QuestionnaireCard";
import styles from "../../styles/common.module.scss";
import { Typography ,Empty, Divider, Spin } from 'antd';
import MySearch from "../../commonpents/MySearch";
const { Title } = Typography;


type PropsType = {
    id: number,
    title: string,
    ispublished: boolean,
    isStar:boolean,
    answerCount: number,
    createAt:string
}
const  ListMock= [
    { id: 1, title: "问卷一", ispublished: false ,isStar:true, answerCount: 5, createAt:"3月4日"},
    { id: 2, title: "问卷二", ispublished: true,isStar:false, answerCount: 10, createAt:"3月4日" },
    { id: 3, title: "问卷三", ispublished: false,isStar:true, answerCount: 15, createAt:"3月4日" },
    { id: 4, title: "问卷四", ispublished: true,isStar:false, answerCount: 20, createAt:"3月4日" },
    { id: 5, title: "问卷五", ispublished: false,isStar:true, answerCount: 25, createAt:"3月4日" },
    { id: 6, title: "问卷六", ispublished: true,isStar:false, answerCount: 30, createAt:"3月4日" },
]

 const List: FC = () => {
    const [list, setList] = useState(ListMock)
    const add = () => {
        // setList([...list,{id:6,title:"问卷六" , ispublished:true}])
        //  XXXX  setList(produce(draft => draft.push({ id: Math.random()%600, title: `问卷${Math.random()%600}`, ispublished: true })))
        //  QS:　　看起来在使用 Immer 时出现了问题。错误提示说一个 immer producer 
        //返回了一个新值并修改了 draft 对象，这是不被允许的。
        //在 Immer 中，一个 producer 函数应该要么返回一个新值，要么修改 draft，而不是同时做这两件事。
        setList(produce(draft => {
            const randomNumber = Math.floor(Math.random() * 1000); // 生成一个随机数作为 id
            return [...draft, { id: randomNumber, title: `问卷 ${randomNumber}`, ispublished: true }];
        }));

    }


    const del = (id: number) => {
        // console.log(id);
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    const edit = (id: number) => {
        setList(
            list.map(
                item => item.id === id ? { ...item, ispublished: !item.ispublished } : item
            )
        )
    }



    return <>
         
         <div className={styles.header}>
            <div className={styles.left}>
                <Title level={2}>我的问卷</Title>
            </div>
            <div className={styles.right}>
               <MySearch></MySearch>
            </div>
         </div>
         <Divider />
         <div className={styles.main}>
            {
                !list.length && <Empty></Empty>
            }
            {
               list.map(item=>{
                   
                let { id} = item 
                return  <SurveyCard  key={id} {...item}  deleteQusetion={del}  editQuestion={edit}></SurveyCard> 

            }) 
            }
         </div>

         <div className={styles.footer}>
            <Spin tip="Loading More" size="large"></Spin>
         </div>

    </>
}


export default List