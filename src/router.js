/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/pages/Welcome'
import Login from '@/components/pages/Login'

import HomeGuest from '@/components/pages/HomeGuest'
import SignupGuest from '@/components/pages/SignupGuest'
import InfoGuest from '@/components/pages/InfoGuest'

import HomeHost from '@/components/pages/HomeHost'
import SignupHost from '@/components/pages/SignupHost'
import InfoHost from '@/components/pages/InfoHost'
import QrHost from '@/components/pages/QrHost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 共通
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
    // ゲスト
    {
      path: '/guest/home',
      name: 'HomeGuest',
      component: HomeGuest
    },
    {
      path: '/guest/signup',
      name: 'SignupGuest',
      component: SignupGuest,
    },
    {
      path: '/guest/info',
      name: 'InfoGuest',
      component: InfoGuest,
    },
    // ホスト
    {
      path: '/host/home',
      name: 'HomeHost',
      component: HomeHost
    },
    {
      path: '/host/signup',
      name: 'SignupHost',
      component: SignupHost
    },
    {
      path: '/host/info',
      name: 'InfoHost',
      component: InfoHost
    },
    {
      path: '/host/qr',
      name: 'QrHost',
      component: QrHost
    }
  ]
})

