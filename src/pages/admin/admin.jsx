import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils.js'
import HeaderNav from '../../components/header/header'
import LeftNav from '../../components/left-nav/left-nav'


import Index from '../index/index'
import User from '../user/user'
import Role from '../role/role'
import Menu1 from '../menu1/menu1'
import Menu2 from '../menu2/menu2'

const { Footer, Content } = Layout;
class Admin extends Component {
  state = {}
  render () {
    const user = memoryUtils.user
    if (!user || !user.id) {
      return <Redirect to='/login' />
    }
    return (
      <Layout style={{ height: '100%' }}>
        <LeftNav />
        <Layout>
          <HeaderNav />
          <Content>
            <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
              <Switch>
                <Route path='/index' component={Index} />
                <Route path='/user' component={User} />
                <Route path='/role' component={Role} />
                <Route path='/menus/menu1' component={Menu1} />
                <Route path='/menus/menu2' component={Menu2} />
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
