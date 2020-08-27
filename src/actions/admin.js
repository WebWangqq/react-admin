import { SETHEADTITLE, TOGGLECOLLAPSED } from './action-types'
export const setHeadTitle = (title) => ({ type: SETHEADTITLE, data: title })
export const toggleCollapsed = () => ({ type: TOGGLECOLLAPSED })
