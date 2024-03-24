import React, { FC, useState } from "react";
import styles from "../../styles/common.module.scss"
import { Button, Card, Typography, Tag, Table, Divider, Space, Spin } from "antd";
import type { TableColumnsType } from 'antd';
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";
const { Title } = Typography

const TableColumns = [
    {
        title: "问卷名称",
        dataIndex: "title",
    }, {
        title: "是否发布",
        dataIndex: "isPublish",
        render: (isPublished: boolean) => {
            return isPublished ? <Tag color="processing" >已发布</Tag> : <Tag >未发布</Tag>
        }
    },
    {
        title: "问卷数量",
        dataIndex: "aswerCount",
    },
    {
        title: "创建时间",
        dataIndex: "createAt",

    }

]

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}



const Trash: FC = () => {
    const nav = useNavigate();
    useTitle("被删除的我的回收站-阳光问卷")

    const { data, loading, error } = useLoadQuestionListData({ isdelete: true })
    const { list = [], total = 0 } = data?.data || {}

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

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
                                <Button type="default" >
                                    恢复
                                </Button>
                                <Button type="default" >
                                    彻底删除
                                </Button>

                            </Space>
                        </div>
                        <Divider></Divider>
                        <Table
                            rowSelection={{
                                type: selectionType,
                                ...rowSelection,
                            }} dataSource={list} columns={TableColumns} pagination={false}></Table>
                    </div>
                </Card>


            }

            <Card >被删除的问卷保留6个月后将被彻底删除，无法再恢复运行！</Card>
        </div>
    </>
}

export default Trash;