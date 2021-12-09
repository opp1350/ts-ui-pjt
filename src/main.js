import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router/rootRoutes.js'
import './assets/css/style.scss'

createApp(App).use(router).mount('#app')
