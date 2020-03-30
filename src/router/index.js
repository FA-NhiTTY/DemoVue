import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListProducts from '../components/ListProducts.vue'
import DetailProduct from '../components/DetailProduct.vue'
import Cart from '../components/Cart.vue'
import Confirm from '../components/Confirm.vue'
import Success from '../components/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ListProducts',
    name: 'ListProducts',
    component: ListProducts
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/DetailProduct/:Pid',
    name: 'DetailProduct',
    component: DetailProduct
  },
  {
    path: '/Confirm',
    name: 'Confirm',
    component: Confirm
  },
  {
    path: '/Success',
    name: 'Success',
    component: Success
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
