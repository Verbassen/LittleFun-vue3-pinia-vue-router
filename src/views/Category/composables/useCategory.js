//封装分类数据代码
import { getCategoryAPIbyID } from '@/apis/category'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  //获得路由参数
  const route = useRoute()
  const getCategory = async () => {
    const res = await getCategoryAPIbyID(route.params.id)
    // console.log('API response:', res)
    categoryData.value = res.result
  }

  onMounted(() => {
    getCategory()
  })
  // 监听路由参数变化
  watch(
    () => route.params.id,
    () => {
      getCategory()
    }
  )

  return {
    categoryData
  }
}
