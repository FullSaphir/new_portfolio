import { createRouter, createWebHistory } from 'vue-router'
import main from '@/views/main.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router