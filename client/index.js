import './promise-polyfill'
import { app } from './app'

const pwa = require('./pwa')
  // Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  pwa
}
app.$mount('#app')