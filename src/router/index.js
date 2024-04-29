import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/identity',
    name: 'identity',
    component: () => import('../views/IdentifyView.vue')
  },
  {
    path: '/simulation',
    name: 'simulation',
    component: () => import('../views/SimulationView.vue')    
  },
  {
    path: '/principle',
    name: 'principle',
    component: () => import('../views/PrincipleView.vue')    
  },  
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')    
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegistionView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if(to.fullPath === '/'  || to.fullPath === '/register') {
    next()
    return
  }

  if(!token && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
})

export default router
