import { get, post } from './axios'

export const getNews = (data) => post('/getWangYiNews', data)

export const getJokes = (data) => get('/getJoke', data)
export const getJokeDetail = (data) => get('/getSingleJoke', data)