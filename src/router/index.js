import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/my/Register'
import Login from '@/my/Login'
import Home from '@/my/Home'
import Test from '@/my/Test'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      // name:'Register',
      component: Login
    },
    {
      path: '/register',
      // name:'Register',
      component: Register
    },
    {
      path: '/home',
      // name:'Home',
      component: Home
    },{
     path:'/test',
      component:Test,
    }
  ]
})
