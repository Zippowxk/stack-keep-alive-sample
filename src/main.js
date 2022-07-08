import { createApp } from "vue";
import App from "./App3.vue";
import router from "./router";
import StackKeepAlive from 'stack-keep-alive'
// import StackKeepAlive from "../debug/index";
import { Tabbar, TabbarItem } from 'vant'
createApp(App)
  .use(router)
  .use(StackKeepAlive)
  .use(Tabbar)
  .use(TabbarItem)
  .mount("#app")
