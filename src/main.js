import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import '@/styles/index.scss'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);

app.use(store).use(router).mount('#app')
