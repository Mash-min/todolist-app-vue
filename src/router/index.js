import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import Todos from '@/views/Todos'
import Register from '@/views/Register'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
    meta: {
      auth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      guest: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch(...['authenticate'])
  if(to.matched.some(record => record.meta.guest == true)) {
    if(localStorage.getItem('token') != null) {
      router.push({ path: '/todos' })
    }
  }

  if(to.matched.some(record => record.meta.auth == true)) {
    store.dispatch(...['checkUser'])
    if(localStorage.getItem('token') == null) {
      router.push({ path: '/' })
    }
  }

  next()
})

export default router
