import { createApp } from 'vue'
// import { createApp } from '../debug/vue.cjs.js'
import App from './App4.vue'
import router from './router'
import StackKeepAlive from 'stack-keep-alive'
// import StackKeepAlive from '../debug/index'
let app = createApp(App)
app.use(router).use(StackKeepAlive).mount('#app')

