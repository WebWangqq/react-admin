import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'

import logo from '../../assets/images/logo.png'

import memoryUtils from '../../utils/memoryUtils.js'
import storageUtils from '../../utils/storageUtils.js'
import { Redirect } from 'react-router-dom';

const Item = Form.Item
class Login extends Component {
  state = {
    initialValues: {
      username: 'admin',
      password: '123456'
    }
  }
  onFinish = values => {
    // console.log('Received values of form: ', values);
    setTimeout(() => {
      message.success('登录成功')
      var res = { username: 'admin', id: '1' }
      memoryUtils.user = res
      storageUtils.saveUser(res)
      this.props.history.replace('/')
    }, 100)
  }
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  validator = async (rule, value) => {
    if (!value) {
      throw new Error('请输入密码');
    } else if (value.length < 4) {
      throw new Error('请输入至少4位密码')
    } else if (value.length > 12) {
      throw new Error('请输入少于12位密码')
    }

  }
  render () {
    //如果用户登录跳转到
    var user = memoryUtils.user
    if (user && user.id) {
      return <Redirect to='/' />
    }

    const { initialValues } = this.state
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="" />
          <h1>React 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initialValues}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Item
              name="username"
              rules={[
                { required: true, message: '请输入用户名!' },
                { min: 4, message: '用户名至少为4位' },
                { max: 12, message: '用户名最多为12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
            </Item>
            <Item
              name="password"
              rules={[{ validator: this.validator }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
              />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login;