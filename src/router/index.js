import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/english',
      name: 'english',
      component: () => import('../views/EngMenuView.vue')
    },
    {
      path: '/français',
      name: 'français',
      component: () => import('../views/FreMenuView.vue')
    },
    {
      path: '/deutsch',
      name: 'deutsch',
      component: () => import('../views/DesMenuView.vue')
    },
    {
      path: '/español',
      name: 'español',
      component: () => import('../views/EspMenuView.vue')
    }
  ]
})

export default router
