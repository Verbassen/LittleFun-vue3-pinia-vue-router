import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
import { ref } from 'vue'

const categoryList = ref([]) // 分类列表
export const useCategoryStore = defineStore('category', () => {
  const getCategory = async () => {
    const response = await getCategoryAPI()
    // console.log(response)
    categoryList.value = response.result
  }

  return {
    categoryList,
    getCategory
  }
})
