import { createRouter, createWebHashHistory, createRouterMatcher } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '@/layout/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'setting',
    // route level code-splitting
    // this generates a separate chunk (setting.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "setting" */ '../views/SettingView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router