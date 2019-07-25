import axios from 'axios';
import Qs from 'qs'
import configApi from './config'

const getAjaxUrl =(url)=> {
  return configApi.baseURL + url+configApi.urlParams + "&code="+localStorage.getItem('code')
}
// 请求超时时间
axios.defaults.timeout = 30000


// 请求拦截
axios.interceptors.request.use(
  reqConfig => {
    // do something
    return reqConfig;
  },
  reqError => {
    
    return Promise.reject(reqError)
  }
)

// 响应拦截
axios.interceptors.response.use(
  resData => {
    if (resData.status === 200) {
      const resultNum = resData.data.errno || resData.data.code;
      const resultMsg = resData.data.errmsg || resData.data.msg;
      switch (resultNum) {
        case 0:
          return Promise.resolve(resData.data);
        case 401:
          // do something
          break;
        case 41008:
          // do something
          break;
        case 500:
          // do something
          break;
        default:
          console.log(resData)
          // reject(res);
      }
    } else {
      return Promise.reject(resData.data);
    }
  },
  resError => {
    console.error(resError);
    return Promise.reject(resError);
  }
)

/**
 * GET 请求
 * @param { String } url    请求地址
 * @param { Object } params   参数对象
 * @param { Object } config   配置对象
 * @param { Function } errCallback   回调函数
 */
export const $get = (url = '', params = {}, config = {}, errCallback = null) => {
  return axios.get(getAjaxUrl(url), {params}, config).then(res => {
    return res;
  }).catch(err => {
    errCallback && errCallback();
    return err;
  })
}

/**
 * POST 请求
 * @param { String } url    请求地址
 * @param { Object } params   参数对象
 * @param { Object } config   配置对象
 * @param { Function } errCallback   回调函数
 */
export const $post = (url = '', params = {}, config = {}, errCallback = null) => {

  const _config = Object.assign({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }, config);

  let resultParams;
  if (_config.headers['Content-Type'].toLowerCase().indexOf('json') > -1) {
    resultParams = params;
  } else {
    if (_config.FormData) {
      resultParams = params;
    } else {
      resultParams = Qs.stringify(params);
    }
  }
  return axios.post(getAjaxUrl(url) , resultParams, _config).then(res => {
    return res;
  }).catch(err => {
    errCallback && errCallback();
    return err;
  })
}