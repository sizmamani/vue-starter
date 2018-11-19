import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../store'

Vue.use(VueResource)

export default {
  get(nodeAddress) {
    return new Promise((resolve, reject) => {
      const api = nodeAddress
      Vue.http.get(api).then(res => {
        resolve(res)
      }, err => {
        store.commit("error", err.body)
        reject(err)
      })
    })
  }
}