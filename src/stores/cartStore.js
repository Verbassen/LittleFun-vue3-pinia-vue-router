import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    // state
    const cartList = ref([])

    // actions
    //获取用户的购物车列表
    const updateNewList = () => {
      findNewCartListAPI().then(res => {
        cartList.value = res.result
      })
    }

    // 添加购物车
    const addCart = goods => {
      const { skuId, count } = goods
      if (isLogin.value) {
        insertCartAPI({ skuId, count }).then(() => {
          updateNewList()
        })
      } else {
        // console.log('addCart', goods)
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find(item => goods.skuId === item.skuId)
        if (item) {
          // 找到了
          item.count++
        } else {
          // 没找到
          cartList.value.push(goods)
        }
      }
    }

    // 删除购物车
    const delCart = skuId => {
      if (isLogin.value) {
        delCartAPI([skuId]).then(() => {
          updateNewList()
        })
      } else {
        // 思路：
        // 1. 找到要删除项的下标值 - splice
        // 2. 使用数组的过滤方法 - filter
        const idx = cartList.value.findIndex(item => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }

    //清除购物车
    const clearCart = () => {
      console.log('clearCart')
      cartList.value = []
    }

    // getters
    // 商品总数
    const allCount = computed(() => cartList.value.reduce((prev, cur) => prev + cur.count, 0))
    // 商品总价
    const allPrice = computed(() => cartList.value.reduce((prev, cur) => prev + cur.count * cur.price, 0))

    //单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find(item => {
        // console.log(`Comparing ${item.skuId} with ${skuId}`)
        return item.skuId === skuId
      })
      if (item) {
        item.selected = selected
      } else {
        console.error(`Item with skuId ${skuId} not found in cartList`)
      }
    }

    //全选功能
    const allCheck = selected => {
      cartList.value.forEach(item => {
        item.selected = selected
      })
    }

    //是否全选
    const isAllCheck = computed(() => cartList.value.length > 0 && cartList.value.every(item => item.selected === true))

    //已选数量
    const selectedCount = computed(() => cartList.value.reduce((prev, cur) => (cur.selected ? prev + cur.count : prev), 0))

    //已选总价
    const selectedPrice = computed(() => cartList.value.reduce((prev, cur) => (cur.selected ? prev + cur.count * cur.price : prev), 0))

    return {
      addCart,
      delCart,
      clearCart,
      updateNewList,
      singleCheck,
      allCheck,
      cartList,
      allCount,
      allPrice,
      isAllCheck,
      selectedCount,
      selectedPrice
    }
  },
  {
    persist: true
  }
)
