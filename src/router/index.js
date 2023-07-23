import { createRouter, createWebHashHistory, createRouterMatcher } from 'vue-router'
import Screen from '../views/Screen.vue'
// import HomeView from '@/layout/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'screen',
    component: Screen
  },
  {
    path: '/screentht',
    name: 'screentht',
    // route level code-splitting
    // this generates a separate chunk (screentht.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "screentht" */ '../views/Screentht.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router