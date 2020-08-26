

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

//读取local中保存user,保存到内存中


if (process.env.NODE_ENV === 'development') {
  //引入mock数据
  require('./mock');
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById('root'))