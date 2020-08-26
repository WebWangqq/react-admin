import { RECEIVE_USER, SHOW_ERROE_MSG, RESET_USER, RECEIVE_MENUS } from '../actions/action-types'
import storageUtils from '../utils/storageUtils'

const initUser = storageUtils.getUser()

export default (state = initUser, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user
    case SHOW_ERROE_MSG:
      const errorMsg = action.errorMsg
      return {
        ...state,
        errorMsg
      }
    case RESET_USER:
      return {}
    case RECEIVE_MENUS:
      const menus = action.menus
      return {
        ...state,
        menus
      }
    default:
      return state
  }
}