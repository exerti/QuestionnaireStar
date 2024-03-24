import React, { FC } from "react";
import { Divider, Typography, Pagination, Spin } from 'antd';
const { Title } = Typography;
import styles from "../../styles/common.module.scss"
import SurveyCard from "../../commonpents/QuestionnaireCard";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
import MySearch from "../../commonpents/MySearch";



const Star: FC = () => {

    const { loading, data, error } = useLoadQuestionListData({ isstar: true })
    const { list = [], total = 0 } = data?.data || {}

    return <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={2}>星标问卷</Title>
            </div>
            <div className={styles.right}>
                <MySearch></MySearch>
            </div>
        </div>

        <Divider />
        {
            loading &&<Spin tip="Loading More" size="large"/>
        }
        <div className={styles.content}>
            {
                list.map((item: any) => {
                    return <SurveyCard key={item.id} {...item} ></SurveyCard>
                })
            }

        </div>


        <div className={styles.footer}>
            {
                !loading && total > 0 &&
                <Pagination onChange={() => {
                    console.log("change")
                }} total={50} />
            }
        </div>
    </>
}

export default Star;