import { $get, $post } from '@/libs/ajax.js';
// 获取首页数据
const $login = (data = {}) => {
  return $post(
    '/client/login/signIn',
    Object.assign({},data),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

export {
  $login
}