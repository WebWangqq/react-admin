const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'https://api.apiopen.top',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }));
  // app.use(createProxyMiddleware('/api', {
  //   target: 'https://api.apiopen.top',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/api': ''
  //   }
  // }))
}