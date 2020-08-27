import React from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { Layout, Button, Modal } from 'antd';
import { ExclamationCircleOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './index.less'

import { formatTime } from '../../utils/dateUtils.js'
import { logOut } from '../../actions/user.js'
import { toggleCollapsed } from '../../actions/admin'


const { Header } = Layout;
const { confirm } = Modal;
class HeaderNav extends React.Component {
  state = {
    currentTime: formatTime(Date.now())
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  getTime = () => {
    this.interId = setInterval(() => {
      const currentTime = formatTime(Date.now())
      this.setState({ currentTime })
    }, 1000)
  }
  logout = () => {
    confirm({
      title: '',
      icon: <ExclamationCircleOutlined />,
      content: '确认退出此系统吗？',
      onOk: () => {
        this.props.logOut()
      },
      onCancel () {
        console.log('取消');
      }
    })
  }
  componentDidMount () {
    this.getTime()
  }
  componentWillUnmount () {
    clearInterval(this.interId)
  }
  render () {
    const { currentTime } = this.state
    const { collapsed, title, username } = this.props
    return (
      <Header className="header-nav">
        <div className="title-nav">
          <Button type="primary" onClick={() => this.props.toggleCollapsed()}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          <span className="title">{title}</span></div>
        <div className="opration">
          <div>
            <span>欢迎您：{username}</span>
            <Button type="link" onClick={this.logout}>退出</Button>
          </div>
          <div>{currentTime}</div>
        </div>
      </Header>
    )
  }
}
export default connect(
  state => ({
    collapsed: state.admin.collapsed,
    title: state.admin.title,
    username: state.user.user.username
  }),
  { toggleCollapsed, logOut }
)(HeaderNav)