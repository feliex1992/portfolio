import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import One from '../views/PortfolioOne.vue'
import Two from '../views/PortfolioTwo.vue'
import Three from '../views/PortfolioThree.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/portfolio/one',
    name: 'one',
    component: One
  },
  {
    path: '/portfolio/two',
    name: 'two',
    component: Two
  },
  {
    path: '/portfolio/three',
    name: 'three',
    component: Three
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
