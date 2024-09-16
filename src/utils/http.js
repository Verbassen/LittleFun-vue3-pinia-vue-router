import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 50000
})

// axios请求拦截器
httpInstance.interceptors.request.use(
  config => {
    // 从userStore中获取token
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  e => Promise.reject(e)
)

// axios响应拦截器
httpInstance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const userStore = useUserStore()
    ElMessage({
      type: 'warning',  
      message: error.response.data.message
    })
    if(error.response.status === 401) {
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default httpInstance
