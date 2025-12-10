import { createRouter, createWebHistory } from 'vue-router'
import auth from '../stores/auth'

// Lazy-loaded views
const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const NotFound = () => import('../views/NotFound.vue')

const AdminLayout = () => import('../views/admin/AdminLayout.vue')
const Dashboard = () => import('../views/admin/Dashboard.vue')
const Users = () => import('../views/admin/Users.vue')
const UserDetail = () => import('../views/admin/UserDetail.vue')
const Reports = () => import('../views/admin/Reports.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, meta: { public: true } },
    { path: '/login', component: Login, meta: { public: true } },
    { path: '/register', component: Register, meta: { public: true } },

    {
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        { path: 'dashboard', component: Dashboard },
        { path: 'users', component: Users },
        { path: 'user/:id', component: UserDetail, props: true },
        { path: 'reports', component: Reports },
        { path: '', redirect: '/admin/dashboard' }
      ]
    },

    { path: '/:pathMatch(.*)*', component: NotFound }
  ],
  linkActiveClass: 'router-link-active',
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated()) {
    return next({ path: '/login', query: { redirect: to.fullPath } })
  }
  next()
})

export default router
