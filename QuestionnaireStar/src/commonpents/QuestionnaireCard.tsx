
import React from 'react';
import styles from '../styles/QuestionnaireCard.module.scss';
import { Button, Divider, Space, Card, Tag ,Modal ,Popconfirm } from 'antd';
import { EditOutlined, LineChartOutlined, StarOutlined, CopyOutlined, DeleteOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import { Link, useNavigate ,} from 'react-router-dom';

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

  function del(id: number) {
    confirm({
      title: '确定删除问卷吗?',
      icon: <ExclamationCircleOutlined />,
      content: '删除后不可恢复',
      
      okText: '确定',
    })
    deleteQusetion && deleteQusetion(id)
  }

  function edit(id: number) {
    editQuestion && editQuestion(id)
  }
  return (
    <div key={id}>
      <Card bordered={false} className={styles.container}>
        <div className={styles.title}>
          <div>
            <Link to={ispublished ? `/question/stat/${id}` : `/question/edit/${id}`}>
              <Space>
                {isStar && <StarOutlined style={{ color: 'red' }}></StarOutlined>}
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
            <Button type='text' icon={<StarOutlined />} size={'middle' } onClick={()=>{}}>{isStar? '取消标星':'标星'}</Button>
            <Popconfirm title="确定复制问卷吗？" onConfirm={() => {}} okText="确定" cancelText="取消">
            <Button  type='text'icon={<CopyOutlined />} size={'small'}>复制</Button>
            </Popconfirm>
            <Button type='text' icon={<DeleteOutlined />} size={'small'} onClick={()=>{del(id)}}>删除</Button></Space>
        </div>
      </Card>

    </div>

  );
};

export default SurveyCard;