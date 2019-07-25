
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'http://ghy.ywiii.com/ywshop',
    urlParams:'?qrId=46&debug=1'
  },
  // 开发环境
  'development': {
    baseURL: 'http://test.ywiii.com/ywshop',
    urlParams:'?qrId=46&debug=1'
  },
  // 测试环境
  'test': {
    baseURL: 'http://test.ywiii.com/ywshop',
    urlParams:'?qrId=46&debug=1'
  }
}
export default modeUrlObj[process.env.NODE_ENV]