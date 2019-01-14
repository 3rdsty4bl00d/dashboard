import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/after-login/home/Home.vue'
import DashBoard from '@/components/after-login/dashboard/DashBoard.vue'
import Music from '@/components/after-login/music/Music.vue'
import MusicAlbum from '@/components/after-login/music/MusicAlbum.vue'
import Payment from '@/components/after-login/payment/Payment.vue'
import Roles from '@/components/after-login/role/Roles.vue'
import Users from '@/components/after-login/users/Users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/musicAlbum',
      name: 'MusicAlbum',
      component: MusicAlbum
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/roles',
      name: 'Roles',
      component: Roles
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    }
  ]
})
