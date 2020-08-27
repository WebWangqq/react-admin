import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'

import logo from '../../assets/images/logo.png'

import { Redirect } from 'react-router-dom';
import { getLogin } from '../../actions/user'
import CryptoJS from "crypto-js";

const Item = Form.Item
class Login extends Component {
  state = {
    initialValues: {
      username: '',
      password: '',
      remember: true
    }
  }
  setCookie = (username, password, days) => {
    // Encrypt，加密账号密码
    var cipherName = CryptoJS.AES.encrypt(username + '', "secretkey123").toString();
    var cipherPwd = CryptoJS.AES.encrypt(password + '', "secretkey123").toString();
    var exdate = new Date(); //获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * days); //保存的天数
    //字符串拼接cookie
    window.document.cookie = "username==" + cipherName + ";path=/;expires=" + exdate.toGMTString();
    window.document.cookie = "usersession==" + cipherPwd + ";path=/;expires=" + exdate.toGMTString();
  }
  getCookie = () => {
    if (document.cookie.length > 0) {
      var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
      let username, password
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=='); //再次切割
        if (arr2[0] === 'username') {
          var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123")
          username = bytes.toString(CryptoJS.enc.Utf8)
        } else if (arr2[0] === 'usersession') {
          var bytes2 = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
          password = bytes2.toString(CryptoJS.enc.Utf8)
        }
      }
      const initialValues = { ...this.state.initialValues }
      initialValues.username = username
      initialValues.password = password
      this.setState({ initialValues })
    }

  }
  clearCookie = () => {
    this.setCookie("", "", -1)
  }
  onFinish = async (values) => {
    // console.log(values)
    const { username, password, remember } = values
    if (remember) {
      this.setCookie(username, password, 7)
    } else {
      this.clearCookie()
    }
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
  UNSAFE_componentWillMount () {
    this.getCookie()
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
            <Item name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
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

export default connect(
  state => ({
    user: state.user.user,
    errorMsg: state.user.errorMsg
  }),
  { getLogin }
)(Login);