import httpInstance from "@/utils/http";

export const loginAPI = ({account, password}) => {
    return httpInstance({
        url: "/login",
        method: "POST",
        data:{
            account,
            password
        }
    });
}

//会员中心用户信息
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
      url: '/goods/relevant',
      params: {
        limit
      }
    })
  }