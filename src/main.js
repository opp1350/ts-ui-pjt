import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router/rootRoutes.js'
import PrimeVue from 'primevue/config';
import tsButton from './ts/components/tsButton.vue'
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
const app = createApp(App);

app.use(PrimeVue);
app.component('InputText', InputText);
app.component('ts-Button', tsButton);
app.use(router).mount('#app');

// createApp(App).use(router).mount('#app')
