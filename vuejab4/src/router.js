import { createRouter, createWebHistory } from "vue-router"

import ProductsPage from "./pages/ProductsPage.vue"
import CartPage from "./pages/CartPage.vue"
import ProfilePage from "./pages/ProfilePage.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ProductsPage },
    { path: "/cart", component: CartPage },
    { path: "/profile", component: ProfilePage }
  ]
})
