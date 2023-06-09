import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import naive from 'naive-ui'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import './assets/main.css'

const app = createApp(App)

app.use(router).use(naive)

app.mount('#app')
