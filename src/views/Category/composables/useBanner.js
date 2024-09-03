//封装轮播图数据代码
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner() {
  const bannerList = ref([])

  const getBanner = async () => {
    //传参为2时获取商品banner
    const res = await getBannerAPI('2')
    // console.log(res);
    bannerList.value = res.result
  }
  onMounted(() => {
    getBanner()
  })

  return {
    bannerList
  }
}
