import React,{FC ,useState} from "react";
import { Divider, Typography  ,Pagination} from 'antd';
const { Title } = Typography;
import styles from "../../styles/common.module.scss"
import SurveyCard from "../../commonpents/QuestionnaireCard";

const  ListMock= [
    { id: 1, title: "问卷一", ispublished: false ,isStar:true, answerCount: 5, createAt:"3月4日"},
    { id: 2, title: "问卷二", ispublished: true,isStar:true, answerCount: 10, createAt:"3月4日" },
    { id: 3, title: "问卷三", ispublished: false,isStar:true, answerCount: 15, createAt:"3月4日" }
   
]

const Star :FC = () => {
    const [list, setList] = useState(ListMock)
    return <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={2}>星标问卷</Title>
            </div>
          
        </div>
        
        <Divider />
        <div className={styles.content}>
            {
                list.map(item => {
                    return <SurveyCard key={item.id} {...item}  deleteQusetion={() => { } }  editQuestion={()=>{}}></SurveyCard>
                })
            }

        </div>


        <div className={styles.footer}>
        <Pagination onChange={()=>{
            console.log("change")
        }} total={50}   />
        </div>
    </>
}

export default Star ;