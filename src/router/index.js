import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheatreView from '../views/TheatreView.vue'
import MovieView from '../views/MovieView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/theatres',
    name: 'theatres',
    component: TheatreView 
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MovieView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
