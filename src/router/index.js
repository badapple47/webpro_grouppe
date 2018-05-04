/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'
import Login from '@/components/Login'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/adduser',
      name: 'AddUser',
      component: AddUser
    },
    {
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
      path: '/login',
      name: 'Login',
      component: Login
    },

  ]

})
