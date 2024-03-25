import React, { FC, useState } from "react";
import styles from "../../styles/common.module.scss"
import { Button, Card, Typography, Tag, Table, Divider, Space, Spin,Modal, message } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
import { useRequest } from "ahooks";
import { deleteQuestion, updateQuestion } from "../../service/question";
const { Title } = Typography


interface DataType {
    key:React.Key,
    title: string,
    isPublish: boolean,
    aswerCount: number,
    createAt: string,
    id: number

}
const TableColumns: TableColumnsType<DataType> = [
    {
        title: "问卷名称",
        dataIndex: "title",
        key: "title",
       
    }, {
        title: "是否发布",
        dataIndex: "isPublish",
        render: (isPublished: boolean) => {
            return isPublished ? <Tag color="processing" >已发布</Tag> : <Tag >未发布</Tag>
        },
        key: "isPublish"
      
    },
    {
        title: "问卷数量",
        dataIndex: "aswerCount",
        key: "aswerCount",
     
    },
    {
        title: "创建时间",
        dataIndex: "createAt",
        key: "createAt",
      

    }

]





const Trash: FC = () => {
    const nav = useNavigate();
    useTitle("被删除的我的回收站-阳光问卷")
    const { data, loading, error , refresh} = useLoadQuestionListData({ isdelete: true })
    const { list = [], total = 0 } = data?.data || {}
    const { confirm} = Modal

    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    
    const  { run :recover }= useRequest(
        async () => {
            for await ( const id of selectedRowKeys){
                updateQuestion(Number(id),{isdelete:false})
            }
        },{
            manual: true,
            debounceWait:500, //防抖
            onSuccess:()=>{
                message.success("恢复成功")
                refresh()
                setSelectedRowKeys([])
            }
        }
 
    )

    const {run :handleDelete} = useRequest( async () => {
         const res = await  deleteQuestion( selectedRowKeys)
         return res
    },{
        manual: true,
        debounceWait:500, //防抖
        onSuccess:()=>{
            message.success("删除成功")
            refresh()
            setSelectedRowKeys([])
        }
    })

    function del(){
        confirm({
            title: '确定要删除吗?',
            icon: <ExclamationCircleOutlined />,
            content: '删除后问卷将无法恢复，请谨慎操作！',
            okText: '确定',
            cancelText: '取消',
            onOk :handleDelete
        })
    }
    return <>

        <div className={styles.header}>
            <div className={styles.left}>

            </div>
            <div className={styles.right}>

                <Button  >清空回收站</Button>
            </div>

        </div>
        <div className={styles.tarshContent}>
            {/* {
                !list.length &&
                <Card>
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60 }}
                        description={
                            <span>
                                <a href="#API">您还没有删除过问卷</a>
                            </span>
                        }
                    >
                        <Button type="primary" onClick={() => nav("/question")} >Create Now</Button>
                    </Empty>
                </Card>
            } */}

            {
                loading && <Spin tip="Loading More" size="large">
                    <></>
                </Spin>}
            {
                list.length > 0 &&
                <Card>
                    <div>
                        <div style={{ marginBottom: 16 }}>
                            <Space>
                                <Button type="default"  onClick={recover}>
                                    恢复
                                </Button>
                                <Button type="default"  onClick={del}>
                                    彻底删除
                                </Button>

                            </Space>
                        </div>
                        <Divider></Divider>

                        <Table
                            rowSelection={{
                                type: 'checkbox',
                                onChange: (selectedRowKeys) => {
                                   setSelectedRowKeys(selectedRowKeys as string[])
                                }
                            }} 
                            dataSource={list}
                            columns={TableColumns}
                            pagination={false}
                            rowKey={(record) => record.id}

                        ></Table>
                    </div>
                </Card>


            }

            <Card >被删除的问卷保留6个月后将被彻底删除，无法再恢复运行！</Card>
        </div>
    </>
}

export default Trash;