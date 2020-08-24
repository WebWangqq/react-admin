import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import menuList from '../../config/menuConfig'

import './index.less'
const { Sider } = Layout;
const { SubMenu } = Menu;
const iconBC = (name) =>
  React.createElement(Icon && Icon[name], {
    style: { fontSize: '16px' }
  })

class LeftNav extends React.Component {
  state = {
    // Icons: Icon
  }

  getMenuNodes = (menuList) => {
    var path = this.props.location.pathname
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path} icon={item.icon ? iconBC(item.icon) : ''} >
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        item.children.find(cItem => cItem.path === path)
        this.opeKey = item.path
        return (
          <SubMenu key={item.path} icon={item.icon ? iconBC(item.icon) : ''} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
  handleClick = e => {
    console.log(e)
  }
  componentWillMount () {
    this.menuNodes = this.getMenuNodes(menuList)
  }
  render () {
    console.log(this.props)
    var path = this.props.location.pathname
    return (
      <Sider breakpoint="lg" width={256} className="left-nav">
        <div className="logo" />
        <Menu
          onClick={this.handleClick}
          selectedKeys={[path]}
          defaultOpenKeys={['/menus']}
          mode="inline"
          theme="dark"
        >
          {this.getMenuNodes(menuList)}
        </Menu>
      </Sider>
    )
  }
}
export default withRouter(LeftNav)