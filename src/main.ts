import { createApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'

import "./app.less"

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Vant)

app.mount('#app')
