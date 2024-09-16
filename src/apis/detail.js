import httpInstance from '@/utils/http'

export const getDetail = id => {
  return httpInstance({
    url: `/goods`,
    method: 'get',
    params: {
      id
    }
  })
}

/**
 * @param {*} id 商品id
 * @param {*} type 1代表24小时热销榜，2代表周榜
 * @param {*} limit 获取商品数量
 */

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
