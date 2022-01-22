import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage'
import LoginPage from '../views/LoginPage'
import SignUpPage from '../views/SignUpPage'
import SignUpGlobiePage from '../views/SignUpGlobiePage'
import SignUpHostPage from '../views/SignUpHostPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/signupgp',
    name: 'SignUpGlobiePage',
    component: SignUpGlobiePage
  },
  {
    path: '/signuphost',
    name: 'SignUpHostPage',
    component: SignUpHostPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
