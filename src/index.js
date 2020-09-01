

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

//读取local中保存user,保存到内存中
import storageUtils from './utils/storageUtils'
import { apiMenus } from './api'
import { receiveMenus } from './actions/user'

require('./mock');

let user = storageUtils.getUser()
if (user && user.id) {
  apiMenus(user).then(res => {
    if (res.code === 200) {
      store.dispatch(receiveMenus(res.data))
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>, document.getElementById('root')
      )
    }
  })

} else {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
  )
}


