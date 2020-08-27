import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'

import logo from '../../assets/images/logo.png'

import { Redirect } from 'react-router-dom';
import { getLogin } from '../../actions/user'


const Item = Form.Item
class Login extends Component {
  state = {
    initialValues: {
      username: 'admin',
      password: 'admin'
    }
  }
  onFinish = async (values) => {

    this.props.getLogin(values)
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
    const { user, errorMsg } = this.props

    if (user && user.id) {
      return <Redirect to='/index' />
    }

    const { initialValues } = this.state
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="" />
          <h1>React 后台管理系统</h1>
        </header>
        <section className="login-content">
          <div className={errorMsg ? "errorMsg show" : 'errorMsg'}>{errorMsg}</div>
          <h2>用户登陆</h2>
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
              <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user.user,
    errorMsg: state.user.errorMsg
  }),
  { getLogin }
)(Login);