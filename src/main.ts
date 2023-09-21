import { createApp } from 'vue'

import './styles/default.css'

import App from './App.vue'
import router from './router'
// 引入全局注册
import { globalRegister } from './global'

// 引入mockjs
import './mock'

const app = createApp(App)

app.use(router)

app.use(globalRegister)

app.mount('#app')
