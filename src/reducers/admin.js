import { SETHEADTITLE, TOGGLECOLLAPSED } from '../actions/action-types'
import storageUtils from '../utils/storageUtils'
const adminState = {
  collapsed: storageUtils.getCollapsed(),
  title: ''
}

export default (state = adminState, action) => {
  switch (action.type) {
    case SETHEADTITLE:
      return {
        ...state,
        title: action.data
      }
    case TOGGLECOLLAPSED:
      storageUtils.saveCollapsed(!state.collapsed)
      return {
        ...state,
        collapsed: !state.collapsed
      }

    default:
      return state
  }
}