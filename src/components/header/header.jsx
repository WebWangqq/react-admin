import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Layout, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './index.less'
import menuList from '../../config/menuConfig.js'
import { formatTime } from '../../utils/dateUtils.js'
import { logOut } from '../../actions/user.js'
const { Header } = Layout;
const { confirm } = Modal;
class HeaderNav extends React.Component {
  state = {
    currentTime: formatTime(Date.now())
  }
  getTime = () => {
    this.interId = setInterval(() => {
      const currentTime = formatTime(Date.now())
      this.setState({ currentTime })
    }, 1000)
  }
  getTitle = () => {
    const path = this.props.location.pathname
    console.log(path)
    let title
    menuList.forEach(item => {
      if (item.path === path) {
        title = item.title
      } else if (item.children) {
        const cItem = item.children.find(cItem => cItem.path === path)
        if (cItem) title = cItem.title
      }
    })
    return title
  }
  logout = () => {
    confirm({
      title: '',
      icon: <ExclamationCircleOutlined />,
      content: '确认退出此系统吗？',
      onOk: () => {
        this.props.logOut()
        // storageUtils.removeUser()
        // memoryUtils.user = {}
        // this.props.history.replace('/login')
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
    return (
      <Header className="header-nav">
        <div className="title-nav">{this.props.title}</div>
        <div className="opration">
          <div>
            <span>欢迎您：{this.props.username}</span>
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
    title: state.admin.title,
    username: state.user.username
  }),
  { logOut }
)(withRouter(HeaderNav))