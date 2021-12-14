import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router/rootRoutes.js'
import PrimeVue from 'primevue/config'
import tsButton from './ts/components/tsButton.vue'
import tsInput from './ts/components/tsInput.vue'

import 'primevue/resources/themes/saga-blue/theme.css' // default theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import './assets/css/style.scss' // ts

const app = createApp(App);
app.use(PrimeVue);
app.component('ts-button', tsButton);
app.component('ts-input', tsInput);
app.use(router).mount('#app');

//createApp(App).use(router).mount('#app')
