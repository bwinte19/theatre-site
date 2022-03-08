import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { mockLocations, mockMovies } from './mock.js'

Vue.config.productionTip = false

let data = {
  movies: mockMovies,
  locations: mockLocations,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
