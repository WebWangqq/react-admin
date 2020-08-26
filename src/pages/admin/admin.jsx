import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import menuList from '../../config/menuConfig.js'
import { asyncComponent } from '../../utils/asyncComponent.js'

import HeaderNav from '../../components/header/header'
import LeftNav from '../../components/left-nav/left-nav'


const { Footer, Content } = Layout;

const load = component => {
  return import(`../${component}.jsx`)
}
class Admin extends Component {
  state = {
    menus: []
  }
  //根据菜单生成路由文件
  handleRouters (menu) {
    let childRouter = []
    menu.forEach(item => {
      if (item.children && item.children.length > 0) {
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

    const user = this.props.user
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
                {
                  menusData.map((item, index) => <Route path={item.path} component={asyncComponent(() => load(item.component))} key={index} exact />)
                }
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

export default connect(
  state => ({
    user: state.user
  }),
  {}
)(Admin);
