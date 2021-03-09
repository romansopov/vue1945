import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RequestForm from '../views/Obd-Memorial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/obd-memorial',
    name: 'Obd-memorial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RequestForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
