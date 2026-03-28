import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Nucleation from './components/Nucleation.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/nucleation', component: Nucleation }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

const app = createApp(App)
app.use(router)
app.mount('#app')



