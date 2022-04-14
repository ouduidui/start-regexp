import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('~/pages/home.vue'),
    },
    {
      path: '/more',
      component: () => import('~/pages/links.vue'),
    },
    {
      path: '/:id',
      component: () => import('~/pages/regExp.vue'),
    },
  ],
  history: createWebHistory(),
})

createApp(App).use(router).mount('#app')
