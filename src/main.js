import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import StackKeepAlive from 'stack-keep-alive'
// import StackKeepAlive from '../debug/index'

createApp(App).use(router).use(StackKeepAlive).mount('#app')
