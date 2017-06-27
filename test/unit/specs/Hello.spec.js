import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Hello from '@/components/Hello'
import Results from '@/components/Results'
import byLocation from '@/components/byLocation'

describe('Main.vue', () => {
  it('should render correct contents', () => {
    Vue.use(VueRouter)
    const router = new VueRouter({
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
    const Constructor = Vue.extend(Main)
    const vm = new Constructor({
      router: router
    }).$mount()
    Vue.nextTick(() => {
      console.log("h1 =" , vm.$el.querySelector('#headline').textContent)
      expect(vm.$el.querySelector('#headline').textContent)
      .to.equal('When’s the<br />next bus?')
    })
  })
})
