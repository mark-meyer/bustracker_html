import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Hello from '@/components/Hello'
import Results from '@/components/Results'
import byLocation from '@/components/byLocation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      props:true
    },
    {
      path: '/find/',
      name: 'empty',
      component: Hello,
      props:true
    },
    {
      path: '/find/:query',
      name: 'find',
      component: Results,
      props:true
    },
    {
      path: '/bylocation',
      name: 'emptylocation',
      component: byLocation
    },
    {
      path: '/bylocation/:lat/:lon',
      name: 'bylocation',
      component: byLocation,
      props:true
    }
  ]
})
