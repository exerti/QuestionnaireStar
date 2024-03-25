import React, { FC } from "react";
import { Card, Space, Typography, Form, Input, Button, Checkbox, message } from 'antd'; "antd";
import styles from '../../styles/Register.module.scss'
import { UserAddOutlined, LockOutlined, UserOutlined  ,PhoneOutlined} from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { register } from "../../service/user";
const { Title } = Typography;



const Register: FC = () => {
    const nav= useNavigate();
    const {run } = useRequest( async (values)=>{
         const  {username,phonenumber,password} = values;
         const  res =  await register(username,phonenumber,password) 
         return res;
    },
    {
        manual:true,
        onSuccess(res){
            message.success('注册成功');
            nav('/login');
        }
    }
 
    )

    function onFinish(values: any) {
        run(values);
    }

    return <>

        <div className={styles.container}>

            <Card  style={{
                width:'36vw'
            }}>
                <Space>
                    <Title level={2}>
                        <UserAddOutlined /> 注册
                    </Title>
                </Space>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' },
                                { type: 'string' },
                                {pattern:/^[\w\u4E00-\u9FA5]{4,20}$/,  message:"用户名不能包含特殊字符"}    
                    ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item name="phonenumber"
                        rules={[{ required: true, message: 'Please input your PhoneNumber!' },
                            {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/ ,message:"请输入正确的手机号"
                        }
                        ]}
                    >
                        <Input prefix={<PhoneOutlined />} placeholder="PhoneNumber" />

                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="checkpassword"
                        dependencies={['password']} // 依赖的name,name 发生变化时，会重新校验
                        rules={[{ required: true, message: 'ok' },
                               ({ getFieldValue})=>{
                                   return ({
                                       validator(_,value){
                                           if(!value || getFieldValue('password')===value){
                                               return Promise.resolve();
                                           }else{
                                               return Promise.reject(new Error('两次密码不一致'))
                                           }
                                        }
                                    })
                                }
                               
                    ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Please input your Password again !"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Space>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        register now!
                        </Button>

                        <Link to={"/login"}>已有账号，去登陆</Link>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    </>
}

export default Register;