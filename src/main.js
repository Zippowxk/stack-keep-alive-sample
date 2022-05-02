import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import StackKeepAlive from 'stack-keep-alive'

createApp(App).use(router).use(StackKeepAlive).mount('#app')
