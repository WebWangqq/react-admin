import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils.js'
import menuList from '../../config/menuConfig.js'
import { asyncComponent } from '../../utils/asyncComponent.js'

import HeaderNav from '../../components/header/header'
import LeftNav from '../../components/left-nav/left-nav'

// import Index from '../index/index'
// import User from '../user/user'
// import Role from '../role/role'
// import Menu1 from '../menu1/menu1'
// import Menu2 from '../menu2/menu2'
import Detail from '../detail/detail'
const { Footer, Content } = Layout;

const load = component => {
  return import(`../${component}`)
}
class Admin extends Component {
  state = {
    menus: []
  }
  //根据菜单生成路由文件
  handleRouters (menu) {
    let childRouter = []
    menu.forEach(item => {
      if (item.children) {
        childRouter = [...childRouter, ...this.handleRouters(item.children)]
      } else {
        return childRouter.push(item)
      }
    })
    return childRouter
  }
  UNSAFE_componentWillMount () {
    this.setState({ menus: menuList })
  }
  render () {
    const { menus } = this.state
    let menusData = this.handleRouters(menus)
    const user = memoryUtils.user
    if (!user || !user.id) {
      return <Redirect to='/login' />
    }
    return (
      <Layout style={{ height: '100%' }}>
        <LeftNav />
        <Layout>
          <HeaderNav />
          <Content style={{ padding: '10px' }}>
            <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
              <Switch>
                {/* <Route path='/index' component={Index} />
                <Route path='/user' component={User} />
                <Route path='/role' component={Role} />
                <Route path='/menus/menu1' component={Menu1} />
                <Route path='/menus/menu2' component={Menu2} /> */}
                {
                  menusData.map((item, index) => <Route path={item.path} component={asyncComponent(() => load(item.component))} key={index} exact />)
                }
                <Route path='/user/detail/:id' component={Detail} />
                <Route path='/menus/menu1/detail/:id' component={Detail} />
                <Redirect to='/index' />
              </Switch>
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
