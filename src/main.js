// import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { createApp } from '../debug/vue.cjs.js'
import App from './App4.vue'
import router from './router'
import StackKeepAlive from 'stack-keep-alive'
// import StackKeepAlive from '../debug/index'

let cps = {
  'v-a': {
    template: '<div>Component A</div>',
  },
  'v-b': {
    template: '<div>Component B</div>',
  },
  'v-a': {
    template: '<div>Component A1</div>',
  },
  'transition': {
    template: '<div>Component transition</div>',
  },
}

let app = createApp(App)
app.use(router).use(StackKeepAlive).mount('#app')

for (const prop in cps) {
  if (cps.hasOwnProperty(prop)) {
    const component = cps[prop]
    app.component(prop, component)
  }
}


