import { HEADER_TITLE } from '../actions/action-types'

const adminState = {
  title: ''
}

export default (state = adminState, action) => {
  switch (action.type) {
    case HEADER_TITLE:
      return {
        ...state,
        title: action.data
      }
    default:
      return state
  }
}