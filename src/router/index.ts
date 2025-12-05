// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Auth Pages
import Login from '@/views/auth/Login.vue'
import SignUp from '@/views/auth/Signup.vue'

// Main Pages
import Dashboard from '../views/Dashboard.vue'
import Students from '../views/Students.vue'
import Teachers from '../views/Teachers.vue'
import Payments from '../views/Payments.vue'
import Courses from '../views/Courses.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { 
        title: 'Kirish',
        requiresAuth: false 
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: { 
        title: 'Ro\'yxatdan o\'tish',
        requiresAuth: false 
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { 
        title: 'Dashboard',
        requiresAuth: true 
      }
    },
    {
      path: '/students',
      name: 'students',
      component: Students,
      meta: { 
        title: 'O\'quvchilar',
        requiresAuth: true 
      }
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers,
      meta: { 
        title: 'O\'qituvchilar',
        requiresAuth: true 
      }
    },
    {
      path: '/payments',
      name: 'payments',
      component: Payments,
      meta: { 
        title: 'To\'lovlar',
        requiresAuth: true 
      }
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses,
      meta: { 
        title: 'Kurslar',
        requiresAuth: true 
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { 
        title: 'Sozlamalar',
        requiresAuth: true 
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login'
    }
  ],
})

// Navigation Guard - Authentication tekshirish
router.beforeEach((to, from, next) => {
  // Title o'zgartirish
  document.title = to.meta.title || 'O\'quv Markaz'
  
  // Token borligini tekshirish (localStorage dan)
  const isAuthenticated = localStorage.getItem('auth_token')
  
  // Agar sahifa auth talab qilsa va user login qilmagan bo'lsa
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } 
  // Agar user login qilgan va login/signup sahifasiga kirmoqchi bo'lsa
  else if (!to.meta.requiresAuth && isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    next('/dashboard')
  } 
  // Boshqa holatlarda davom ettirish
  else {
    next()
  }
})

export default router