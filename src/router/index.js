import { createRouter, createWebHistory } from 'vue-router'
import CesiumContainer from '../views/CesiumContainer.vue'
const routes = [
  {
    path: '/',
    name: 'CesiumContainer',
    component: CesiumContainer
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
