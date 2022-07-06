import { createApp } from '../debug/vue.esm-browser'
import App from './App.vue'
import router from './router'
// import StackKeepAlive from 'stack-keep-alive'
// import StackKeepAlive from '../debug/index'

createApp(App).use(router).mount('#app')
