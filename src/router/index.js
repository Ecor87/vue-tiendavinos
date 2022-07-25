import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vinos from '../views/Vinos.vue'
import Promocion from '../views/Promocion.vue'
import Accesorios from '../views/Accesorios.vue'
import Checkout from '../views/Checkout.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/vinos',
    name: 'vinos',
    component: Vinos
  },
  {
    path: '/promocion',
    name: 'promocion',
    component: Promocion
  },
  {
    path: '/accesorios',
    name: 'accesorios',
    component: Accesorios
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '*',
    name: 'error',
    component: Error
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
