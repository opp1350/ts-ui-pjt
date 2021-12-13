import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router/rootRoutes.js'
import PrimeVue from 'primevue/config'
import tsButton from './ts/components/tsButton.vue'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import './assets/css/style.scss' // ts

const app = createApp(App);
app.use(PrimeVue);
app.component('ts-button', tsButton);
app.use(router).mount('#app');

//createApp(App).use(router).mount('#app')
