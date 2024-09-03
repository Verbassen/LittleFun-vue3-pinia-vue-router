import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

//引入懒加载插件和注册
import { lazyLoadImgPlugin } from '@/directives'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(lazyLoadImgPlugin)
app.mount('#app')
