import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/cart', component: () => import('../pages/Cart.vue'), name: 'cart' },
  ],
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
