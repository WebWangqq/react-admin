import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import { setHeadTitle } from '../../actions/admin'

import './index.less'
const { Sider } = Layout;
const { SubMenu } = Menu;

const iconBC = (name) =>
  React.createElement(Icon && Icon[name], {
    style: { fontSize: '16px' }
  })


class LeftNav extends React.Component {
  state = {
    currentKey: '',
    openKey: ''
  }

  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname
    return menuList.reduce((pre, item) => {
      if (!item.hidden) {
        if (!item.children || item.children.length === 0) {
          if (item.path === path || path.indexOf(item.path) === 0) {
            this.props.setHeadTitle(item.title)
          }
          pre.push((
            <Menu.Item key={item.path} icon={item.icon ? iconBC(item.icon) : ''} onClick={() => this.props.setHeadTitle(item.title)} >
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          ))
        } else {
          pre.push((
            <SubMenu key={item.path} icon={item.icon ? iconBC(item.icon) : ''} title={item.title}>
              {this.getMenuNodes(item.children)}
            </SubMenu>
          ))
        }
      }
      return pre
    }, [])
  }

  UNSAFE_componentWillMount () {
    this.menuNodes = this.getMenuNodes(this.props.menus)
  }
  componentDidMount () {
  }
  getCurrentPath = (menuList) => {
    var path = this.props.location.pathname
    let currentPath = {}
    menuList.forEach(item => {
      if ((!item.children || item.children.length === 0)) {
        if (path.indexOf(item.path) === 0) {
          currentPath.selectedKey = item.path
          currentPath.openKey = ''

        }
      } else {
        const cItem = item.children.find(cItem => path.indexOf(cItem.path) === 0)
        if (cItem) {
          currentPath.selectedKey = cItem.path
          currentPath.openKey = item.path
        }
      }
    })
    return currentPath
  }

  render () {
    const { collapsed } = this.props
    const { selectedKey, openKey } = this.getCurrentPath(this.props.menus)
    return (
      <Sider className="left-nav" collapsed={collapsed}>
        <div className="logo" />
        <Menu
          onClick={this.handleClick}
          selectedKeys={[selectedKey]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
        >
          {this.menuNodes}
        </Menu>
      </Sider>
    )
  }
}
export default connect(
  state => ({
    menus: state.user.menus,
    collapsed: state.admin.collapsed
  }),
  { setHeadTitle }
)(withRouter(LeftNav))