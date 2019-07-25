import { $get, $post } from '@/libs/ajax.js';
// 获取首页数据
const $getIndexData = (data = {}) => {
  return $get(
    '/api/work/ghyIndex',
    Object.assign({}, data)
  )
}

export {
  $getIndexData
}