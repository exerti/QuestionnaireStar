
import React, { useState } from 'react';
import styles from '../styles/QuestionnaireCard.module.scss';
import { Button, Divider, Space, Card, Tag ,Modal ,Popconfirm, message } from 'antd';
import { EditOutlined, LineChartOutlined, StarOutlined, CopyOutlined, DeleteOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import { Link, useNavigate ,} from 'react-router-dom';
import { useRequest } from 'ahooks';
import { updateQuestion ,deleteQuestion, copyQuestion } from '../service/question';

type PropsType = {
  id: number,
  title: string,
  ispublished: boolean,
  isStar: boolean,
  answerCount: number,
  createAt: string
  deleteQusetion?: (id: number) => void ,
  editQuestion?: (id: number) => void,
}



const SurveyCard: React.FC<PropsType> = props => {
  const { id, title, ispublished, deleteQusetion, editQuestion, createAt, isStar } = props;
  const nav = useNavigate()
  const { confirm} = Modal


  const [isStarState ,setIsStarState] =useState(isStar)
  const {run: handleStar ,loading: startedloading}  = useRequest( async ()=>{
     const res = await updateQuestion(id,{isStar:!isStarState})
     return res
  },{manual:true,
    onSuccess: ()=>{
      setIsStarState(!isStarState)
      message.success('已更新')
    }
  })

  
  const [isDeleted,setIsDeleted]= useState(false)
  const { run: handleDelete ,loading: deleteLoading} = useRequest(async () => {
      const res = await  updateQuestion(id,{isDeleted:true})
      return res
  },{
    manual:true,
    onSuccess: ()=>{
      setIsDeleted(true)
      message.success('删除成功')

    }
  })

  const { run: handleCopy ,loading: copyLoading} = useRequest(async () => {
      const res = await  copyQuestion(id)
      return res
  },{
    manual:true,
    onSuccess: (res)=>{
      let {id} =res.data || {}
      message.success('复制成功')
      nav(`/question/edit/${id}`)
    }
  })

  function del() {
    confirm({
      title: '确定删除问卷吗?',
      icon: <ExclamationCircleOutlined />,
      content: '删除后不可恢复',
      
      okText: '确定',
      onOk: () => {
        handleDelete()
      }
    })
    deleteQusetion && deleteQusetion(id)
  }

  if(isDeleted){
     return null
  }

  return (
    <div key={id}>
      <Card bordered={false} className={styles.container}>
        <div className={styles.title}>
          <div>
            <Link to={ispublished ? `/question/stat/${id}` : `/question/edit/${id}`}>
              <Space>
                {isStarState && <StarOutlined style={{ color: 'red' }}></StarOutlined>}
                {title}
              </Space>
            </Link>

          </div>
          <div>{ispublished ?
            <Tag  >已发布</Tag> :<Tag color="red">未发布</Tag>}
             -- 创建时间: {createAt}
          </div>
        </div>
        <Divider style={{ margin: '15px 0' }}></Divider>
        <div className={styles.content}>

          <Space>
            <Button type='text' icon={<EditOutlined />} onClick={()=>{nav(`/question/edit/${id}` )}}> 编辑问卷</Button>
            <Button type='text' icon={<LineChartOutlined /> }  onClick={ ()=>nav(`/question/stat/${id}`)} disabled={!ispublished}>数据统计</Button></Space>
          <Space>
            <Button type='text' icon={<StarOutlined />} size={'middle' } onClick={handleStar}  disabled={startedloading}>{isStarState? '取消标星':'标星'}</Button>
            <Popconfirm title="确定复制问卷吗？" onConfirm={handleCopy} okText="确定" cancelText="取消"  disabled={copyLoading}>
            <Button  type='text'icon={<CopyOutlined />} size={'small'}>复制</Button>
            </Popconfirm>
            <Button type='text' icon={<DeleteOutlined />} size={'small'} onClick={del} disabled={deleteLoading}>删除</Button></Space>
        </div>
      </Card>

    </div>

  );
};

export default SurveyCard;