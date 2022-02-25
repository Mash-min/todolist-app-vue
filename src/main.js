import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import store from '@/store'
import '@/axios'

const app  = createApp(App)
app.use(router).mount('#app')
app.use(store)
