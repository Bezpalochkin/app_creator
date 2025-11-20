import { createApp } from 'vue'
import App from '@/App.vue'

import plugins from '@/plugins'
import router from '@/router'
import { createPinia } from 'pinia'

import '@st/style.css'
import '@st/icons.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
const pinia = createPinia()

app.use(plugins)
app.use(pinia)
app.use(router)
app.mount('#app')
