import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//引入懒加载插件和注册
import { lazyLoadImgPlugin } from '@/directives'
//引入组件插件和注册
import { componentPlugin } from './components'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(lazyLoadImgPlugin)
app.use(componentPlugin)
app.mount('#app')
