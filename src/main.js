import { createApp } from 'vue'
// import { createApp } from '../debug/vue.cjs.js'
import App from './App4.vue'
import router from './router'
import StackKeepAlive from 'stack-keep-alive'
// import StackKeepAlive from '../debug/index'
let app = createApp(App)

// force open devtools 
if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init", app);
  }
}
app.config.devtools = true
app.use(router).use(StackKeepAlive).mount('#app')

