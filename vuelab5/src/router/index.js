import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/pages/Landing.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})
