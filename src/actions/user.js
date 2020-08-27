import { message } from 'antd'
import { RECEIVE_USER, SHOW_ERROE_MSG, RESET_USER, RECEIVE_MENUS } from './action-types'
import storageUtils from '../utils/storageUtils'

import { apiLogin, apiMenus } from '../api'

export const receiveUser = (data) => ({ type: RECEIVE_USER, data })
export const showErroeMsg = (data) => ({ type: SHOW_ERROE_MSG, data })
export const receiveMenus = (data) => ({ type: RECEIVE_MENUS, data })

export const getLogin = (data) => {
  return async dispatch => {
    const result = await apiLogin(data)
    if (result.code === 200) {
      const user = result.data
      var params = { username: user.username }
      apiMenus(params).then(mRes => {
        if (mRes.code === 200) {
          message.success('登录成功')
          dispatch(receiveMenus(mRes.data))
          storageUtils.saveUser(user)
          dispatch(receiveUser(user))
        }
      })
    } else {
      dispatch(showErroeMsg(result.message))
    }
  }
}

export const logOut = () => {
  storageUtils.removeUser()
  return { type: RESET_USER }
}
