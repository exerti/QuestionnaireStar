import React, { FC } from "react";
import { Card, Space, Typography, Form, Input, Button, Checkbox , } from 'antd'; "antd";
import styles from '../../styles/Register.module.scss'
import { UserAddOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import CaptchaInput from "../../commonpents/CaptchaInput";
const { Title } = Typography;



function onFinish(values: any) {
    console.log('Received values of form: ', values);
}


const Login: FC = () => {
    return <>
        <div className={styles.container}>

            <Card style={{
                width: '36vw'
            }}>
                <Space>
                    <Title level={2}>
                        <UserAddOutlined /> 登录
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
                        { pattern: /^[\w\u4E00-\u9FA5]{4,20}$/, message: "用户名不能包含特殊字符" }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                    
                    <Form.Item>
                        <CaptchaInput></CaptchaInput>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            or
                            <Link to={"/register"}> Register now!</Link>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    </>
}

export default Login;