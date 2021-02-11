import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // Home path
  },
  {
    path: '/about',  // greift auf die komponente About.vue zu
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/files', // greift auf die komponente Files.vue zu
    name: 'Files',
    component: () => import(/* webpackChunkName: "about" */ '../views/Files.vue')
  },
  {
    path: '/register', // greift auf die komponente Register.vue zu
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
