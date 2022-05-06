import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */ '../views/List.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "Info" */ '../views/Info.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
