import React, { FC } from "react";
import { Divider, Typography, Pagination, Spin } from 'antd';
const { Title } = Typography;
import styles from "../../styles/common.module.scss"
import SurveyCard from "../../components/QuestionnaireCard";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
import MySearch from "../../components/MySearch";
import MyPagination from "../../components/MyPagination ";



const Star: FC = () => {

    const { loading, data, error } = useLoadQuestionListData({ isStar: true })
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
               loading && <Spin tip="Loading More" size="large">
               <></>
           </Spin>
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
                list.length >0&& total > 0 &&
                <MyPagination total={total}></MyPagination>
            }
        </div>
    </>
}

export default Star;