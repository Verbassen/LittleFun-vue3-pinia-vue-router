import httpInstance from '@/utils/http'

export function getCategoryAPIbyID(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */

export function getCategoryFilterAPI(id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export function getSubCategoryAPI(data) {
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
