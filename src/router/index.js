/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import UpdateUser from '@/components/UpdateUser'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Directory from '@/components/Directory'
import NewsDetail from '@/components/NewsDetail'
import EventDetail from '@/components/EventDetail'


Vue.use(Router)
// Vue.component('qrcode', VueQrcode);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      // path: '/updateuser/',
      path: '/updateuser/:userId',
      name: 'UpdateUser',
      component: UpdateUser
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },

    {
      path: '/directory',
      name: 'Directory',
      component: Directory
    },
    {
      path: '/news/:userId',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/event/:userId',
      name: 'EventDetail',
      component: EventDetail
    },
  ]

})
