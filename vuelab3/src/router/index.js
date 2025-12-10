import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Article = () => import('../views/Article.vue')
const About = () => import('../views/About.vue')
const NotFound = () => import('../views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Home' } },
    { path: '/article/:id', name: 'Article', component: Article, props: true, meta: { title: 'Article' } },
    { path: '/about', name: 'About', component: About, meta: { title: 'About' } },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ],
  linkActiveClass: 'router-link-active',
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
