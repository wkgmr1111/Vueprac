import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: Home

  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')

  },
  {
    path: '/intro',
    name: 'Introduction',
    component: () => import('../views/Introduction.vue')

  },
  {
    path: '/product',
    name: 'Production',
    component: () => import('../views/Production.vue')

  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
