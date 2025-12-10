import { createRouter, createWebHistory } from 'vue-router'

// Імпортуємо сторінки
import Home from './views/Home.vue'
import About from './views/About.vue'
import Article from './views/Article.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
