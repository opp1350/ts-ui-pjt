import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router/rootRoutes.js'

createApp(App).use(router).mount('#app')
