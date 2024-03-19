
import React from 'react';
import styles from '../styles/QuestionnaireCard.module.scss';
type PropsType ={
    id: number,
    title: string,
    ispublished: boolean,
    isStar:boolean,
    answerCount: number,
    createAt:string
    deleteQusetion: (id: number) => void,
    editQuestion: (id: number) => void,

}


const SurveyCard: React.FC<PropsType> = props => {
    const {id, title, ispublished ,deleteQusetion ,editQuestion} = props;

    function del(id: number) {
      deleteQusetion&&deleteQusetion(id)
    }

    function edit(id: number) {
      editQuestion&&editQuestion(id)
    }
  return (
    <div key={id}>

    <span>{title}</span>
    <button onClick={() => del(id)}>删除</button>
    <button onClick={() => edit(id)}>编辑</button>
    {ispublished ? <span style={{
        color: 'green'
    }}>已发布</span> : <span
        style={{
            color: 'red'
        }}>未发布</span>}


    <hr></hr>


      <div className={styles.container}></div>

</div>
  );
};

export default SurveyCard;