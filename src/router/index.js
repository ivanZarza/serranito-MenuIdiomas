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
      component: () => import('../views/EngSelectView.vue')
    },
    {
      path: '/english/menu',
      name: 'englishfood',
      component: () => import('../views/EngMenuView.vue')
    },
    {
      path: '/english/drinks',
      name: 'englishdrinks',
      component: () => import('../views/EngDrinksView.vue')
    },
    {
      path: '/français',
      name: 'français',
      component: () => import('../views/FreSelectView.vue')
    },
    {
      path: '/français/menu',
      name: 'françaisfood',
      component: () => import('../views/FreMenuView.vue')
    },
    {
      path: '/français/drinks',
      name: 'françaisdrinks',
      component: () => import('../views/FreDrinksView.vue')
    },
    {
      path: '/deutsch',
      name: 'deutsch',
      component: () => import('../views/DesSelectView.vue')
    },
    {
      path: '/deutsch/mahlzeit',
      name: 'desfood',
      component: () => import('../views/DesMenuView.vue')
    },
    {
      path: '/deutsch/trinken',
      name: 'desdrinks',
      component: () => import('../views/DesDrinksView.vue')
    },
    {
      path: '/italiano',
      name: 'italiano',
      component: () => import('../views/ItaSelectView.vue')
    },
    {
      path: '/italiano/menu',
      name: 'itacomidas',
      component: () => import('../views/ItaMenuView.vue')
    },
    {
      path: '/italiano/bevande',
      name: 'itabebidas',
      component: () => import('../views/ItaDrinksView.vue')
    },
    {
      path: '/español',
      name: 'español',
      component: () => import('../views/EspSelectView.vue')
    },
    {
      path: '/español/menu',
      name: 'espcomidas',
      component: () => import('../views/EspMenuView.vue')
    },
    {
      path: '/español/bebidas',
      name: 'espbebidas',
      component: () => import('../views/EspDrinkView.vue')
    }
  ]
})

export default router
