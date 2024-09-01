import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const pinia = createPinia()

import { getCategoryAPI } from './apis/testAPI'
getCategoryAPI().then(res => {
    console.log(res)
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
