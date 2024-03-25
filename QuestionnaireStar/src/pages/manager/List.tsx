
import React, { FC, useEffect, useRef, useState } from "react";
import Immer, { produce } from "immer";
import SurveyCard from "../../commonpents/QuestionnaireCard";
import styles from "../../styles/common.module.scss";
import { Typography ,Empty, Divider, Spin } from 'antd';
import MySearch from "../../commonpents/MySearch";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
import MyPagination from "../../commonpents/MyPagination ";
import { useSearchParams } from "react-router-dom";
import { useDebounceFn, useRequest } from "ahooks";
import { getQuestionList } from "../../service/question";

const { Title } = Typography;


type PropsType = {
    id: number,
    title: string,
    ispublished: boolean,
    isStar:boolean,
    answerCount: number,
    createAt:string
}


 const List: FC = () => {
    const [started , setStarted] = useState(false)
    const [list , setList] = useState([])
    const [total , setTotal] = useState(0)
    const [page , setPage] = useState(1)
    const [params]  = useSearchParams()
    const hasmore = total > list.length
    const keyword = params.get('keyword')|| '' 

    const containerRef = useRef<HTMLDivElement>(null)

    //keyword发生变化时，重新加载数据
    useEffect(()=>{
       setList([])
       setPage(1)
       setTotal(0)
    },[keyword])

    //真正加载数据
    const {run: loadmore, loading}  = useRequest(async ()=>{
        const res = await  getQuestionList({
            page,
            pagesize:10,
            keyword
        })
        return res
    },{
        manual:true,
        onSuccess: (res:any)=>{
            const {list: l , total} =res?.data
            setTotal(total)
            setList(list.concat(l))
            setPage(page+1)
        }
    })

    //防抖 
    const {run :handleScroll} = useDebounceFn(()=>{
        if(!containerRef.current) return 
        // const scrollTop = containerRef.current.scrollTop
        // const clientHeight = containerRef.current.clientHeight
        // const scrollHeight = containerRef.current.scrollHeight
        // if(scrollTop + clientHeight >= scrollHeight){   
        //     if(hasmore){
        //         setPage(page+1)
        //         loadmore()
        //     }
        // }
        const domRect = containerRef.current.getBoundingClientRect()
        if(!domRect) return 
        const {bottom} = domRect
        if(bottom <= document.body.clientHeight){
            if(hasmore){
                loadmore()
                setStarted(true)
            }
        }
    },{wait:500})

    //1、初始化
    useEffect(()=>{
        loadmore()
    },[params])
    //2、滚动到底部
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)

        }
    },[hasmore,params])
    
    
    // 多响应状态的jsx

    const loadmoreElement =()=>{
        if( !started || loading){
            return <Spin tip="Loading More" size="large" ><></></Spin>
        }
        if(total ===0){
            return <Empty description="暂无数据" />
        }
        if(!hasmore) {
            return <span > 没有更多了</span>
        }
        return <>
          正在加载更多...
        </>
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
                list.length >0 && list.map((item:any)=>{
                let { id} = item 
                return  <SurveyCard  key={id} {...item}  ></SurveyCard> 

            }) 
            }
         </div>

         <div className={styles.footer}>
            <div ref={containerRef}> { loadmoreElement()} </div>
         </div>

    </>
}


export default List