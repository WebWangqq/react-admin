import { SETHEADTITLE } from '../actions/action-types'

const adminState = {
  title: ''
}

export default (state = adminState, action) => {
  switch (action.type) {
    case SETHEADTITLE:
      return {
        ...state,
        title: action.data
      }
    default:
      return state
  }
}