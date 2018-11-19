import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'
import router from './router'
import store from './store'
import * as bootstrap from './static/css/bootstrap.css'
// import * as css from './static/scss/app.scss'
// import * as animated from './static/css/animated.css'
import * as fontAwesome from './static/css/fontawesome.css'




Vue.use(bootstrap)
// Vue.use(css)
// Vue.use(animated)
Vue.use(fontAwesome)
// Vue.directive('on-click-outside', onClickOutside)





sync(store, router)
const app = new Vue({
  router,
  store,
  ...App
})
export { app, router, store }