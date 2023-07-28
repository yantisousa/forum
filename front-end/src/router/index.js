import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/user/cadastro',
    name: 'Cadastro',
    component: () => import('@/views/User/Cadastro.vue')
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import('@/views/User/Login.vue')
  },
  {
    path: '/show/stack/:id',
    name: 'Stack',
    component: () => import('../views/Stack/Index.vue')
  },
  {
    path: '/coments/stack/:id',
    name: 'Comentarios',
    component: () => import('../views/Stack/Show.vue')
  },
  {
    path: '/usuario/config/:id',
    name: 'ConfigUser',
    component: () => import('../views/User/Show.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
