import { get, post } from './axios'

export const login = (data) => post('/login', data)

export const menus = () => get('/menus')