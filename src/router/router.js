import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


// route level code-splitting
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
