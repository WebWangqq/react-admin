import { RECEIVE_USER, SHOW_ERROE_MSG, RESET_USER, RECEIVE_MENUS } from '../actions/action-types'
import storageUtils from '../utils/storageUtils'

const initUser = {
  user: storageUtils.getUser(),
  errorMsg: '',
  menus: []
}

export default (state = initUser, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        user: action.data
      }
    case SHOW_ERROE_MSG:
      return {
        ...state,
        errorMsg: action.data
      }
    case RESET_USER:
      return {}
    case RECEIVE_MENUS:
      return {
        ...state,
        menus: action.data
      }
    default:
      return state
  }
}