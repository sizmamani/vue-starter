import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'


Vue.use(Router)
export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [{
      name: 'default',
      path: '/',
      component: Login,
      meta: {
        auth: false
      }},{
      name: 'login',
      path: '/login/',
      component: Login,
      meta: {
        auth: false
      }
    }
  ]
})