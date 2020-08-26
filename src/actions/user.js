import { RECEIVE_USER, SHOW_ERROE_MSG, RESET_USER, RECEIVE_MENUS } from './action-types'
import storageUtils from '../utils/storageUtils'

import { login, menus } from '../api'

const receiveUser = (user) => ({ type: RECEIVE_USER, user })
const showErroeMsg = (errorMsg) => ({ type: SHOW_ERROE_MSG, errorMsg })
const receiveMenus = (menus) => ({ type: RECEIVE_MENUS, menus })



export const getLogin = (data) => {
  return async dispatch => {
    const result = await login(data)
    if (result.code === 200) {
      const user = result.data
      storageUtils.saveUser(user)
      dispatch(receiveUser(user))
    } else {
      dispatch(showErroeMsg(result.message))
    }
  }
}

export const logOut = () => {
  //删除local中的user
  storageUtils.removeUser()
  return { type: RESET_USER }
}

export const getMenus = () => {
  return async dispatch => {
    const result = await menus()
    if (result.code === 200) {
      dispatch(receiveMenus(result.data))
    }
  }
}