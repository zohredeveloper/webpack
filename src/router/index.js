import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Contact from '@/components/Contact'
import mt from 'materialize-css/dist/css/materialize.min.css'
import mtj from 'materialize-css/dist/js/materialize.min'
/* eslint-enable */

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
