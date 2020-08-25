

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

//读取local中保存user,保存到内存中
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'
const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById('root'))