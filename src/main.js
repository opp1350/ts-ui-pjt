import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router/rootRoutes.js'
import PrimeVue from 'primevue/config'
// components
import tsButton from './ts/components/tsButton/tsButton.vue'
import tsInput from './ts/components/tsInput/tsInput.vue'
import tsInputGroup from './ts/components/tsInput/tsInputGroup.vue'

// css
import 'primevue/resources/themes/saga-blue/theme.css' // default theme
import 'primevue/resources/primevue.min.css' // primevue core css
import 'primeicons/primeicons.css' //icons
import './assets/css/style.scss' // ts

const app = createApp(App);
app.use(PrimeVue);
app.use(router).mount('#app');
// components
app.component('ts-button', tsButton);
app.component('ts-input', tsInput);
app.component('ts-input-group', tsInputGroup);