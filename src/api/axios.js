import axios from 'axios'

axios.defaults.baseURL = '/api'

axios.interceptors.request.use(config => {

  // let token = localStorage.getItem('token')
  // if (token) {
  //   config.headers['Authorization'] = 'Bearer ' + token
  // } else {
  //   window.location.reload();
  // }
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {

  const result = response.data
  return result;
}, error => {
  return Promise.reject(error);
});
const apiAxios = (method, url, params, ContentType) => {
  let httpDefault = {
    headers: {
      'content-type': method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json' // 默认值
      // 'Content-Type': ContentType ? ContentType : 'application/json;charset=utf-8'
    },
    method: method,
    url: url,
    // `params` 是即将与请求一起发送的 URL 参数
    // `data` 是作为请求主体被发送的数据
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? params : null,
  }

  return new Promise((resolve, reject) => {
    axios(httpDefault)
      .then((res) => {
        resolve(res)
        return false
      }).catch((response) => {
        reject(response)
      })
  })
}

export const post = (url, data, ContentType) => apiAxios('POST', url, data, ContentType)
export const get = (url, data, ContentType) => apiAxios('GET', url, data, ContentType)
export const put = (url, data, ContentType) => apiAxios('PUT', url, data, ContentType)
export const delect = (url, data, ContentType) => apiAxios('DELETE', url, data, ContentType)
