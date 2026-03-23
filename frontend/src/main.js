import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Overview from './components/Overview.vue'
import Summary from './components/Summary.vue'
import Inspiration from './components/Inspiration.vue'
import Technology from './components/Technology.vue'
import Products from './components/Products.vue'
import Artisan from './components/Artisan.vue'
import Marketing from './components/Marketing.vue'
import Vision from './components/Vision.vue'
import Thanks from './components/Thanks.vue'
import Nucleation from './components/Nucleation.vue'

const routes = [
  { path: '/', component: Overview },
  { path: '/summary', component: Summary },
  { path: '/inspiration', component: Inspiration },
  { path: '/technology', component: Technology },
  { path: '/products', component: Products },
  { path: '/artisan', component: Artisan },
  { path: '/marketing', component: Marketing },
  { path: '/vision', component: Vision },
  { path: '/thanks', component: Thanks },
  { path: '/nucleation', component: Nucleation }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')


