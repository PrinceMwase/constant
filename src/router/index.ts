import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '/',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'login',
        component: () => import('@/views/auth/login.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
