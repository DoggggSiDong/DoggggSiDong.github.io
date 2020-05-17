import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/home')
const choose = () => import('@/views/choose')
const personIndex1 = () => import('@/views/person/personIndex1')
const personChoose = () => import('@/views/person/personChoose')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/choose',
      name:'choose',
      component:choose
    },
    {
      path:'/personIndex1',
      name:'personIndex1',
      component:personIndex1
    },
    {
      path:'/personChoose',
      name:'personChoose',
      component:personChoose
    }
  ]
})
