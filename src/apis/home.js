import httpInstance from "@/utils/http";

// 获取banner
  //传参为2时是获取商品banner，默认为1是获取首页banner
export function getBannerAPI(distributionSite = '1'){
    return httpInstance({
        url:'/home/banner',
        method:'get',
        params:{
            distributionSite
        }
    })
}

// 获取新鲜好物列表
export function getNewAPI(){
    return httpInstance({
        url:'/home/new',
        method:'get'
    })
}

// 获取人气推荐列表
export function getHotAPI(){
    return httpInstance({
        url:'/home/hot',
        method:'get'
    })
}

// 获取商品列表
export function getGoodsAPI(params){
    return httpInstance({
        url:'/home/goods',
        method:'get',
        params
    })
}