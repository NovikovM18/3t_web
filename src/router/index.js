import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue'),
    children: [
      {
        path: 'signin',
        name: 'signin',
        component: () => import('../views/auth/SignIn.vue')
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('../views/auth/SignUp.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/tasks/Tasks.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/departments',
    name: 'departments',
    component: () => import('../views/Departments.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  }
})

router.beforeResolve((to, from) => {
  if ((to.path === '/' || to.path.includes('/tasks') || to.path.includes('/users') || to.path.includes('/departments')) && store.state.auth.user?.user.role !== 'authenticated') {
    return false;
  };
});

router.beforeResolve((to, from) => {
  if (to.path === '/login' && !store.state.auth.user) {
    return to.path = '/login/signin';
  };
});

export default router
