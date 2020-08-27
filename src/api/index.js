import { get, post } from './axios'

export const apiLogin = (data) => post('/login', data)

export const apiMenus = (data) => get('/menus', data)