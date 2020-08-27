import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import NoFound from './pages/noFound/noFound'
export default class App extends React.Component {

  render () {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/404' component={NoFound} />
          <Route path='/' component={Admin} />
        </Switch>
      </Router>
    )
  }
}