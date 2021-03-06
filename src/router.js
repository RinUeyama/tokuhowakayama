import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recruit from './views/Recruit.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
