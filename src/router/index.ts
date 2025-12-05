// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
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
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { title: 'Dashboard' }
    },
    {
      path: '/students',
      name: 'students',
      component: Students,
      meta: { title: 'O\'quvchilar' }
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers,
      meta: { title: 'O\'qituvchilar' }
    },
    {
      path: '/payments',
      name: 'payments',
      component: Payments,
      meta: { title: 'To\'lovlar' }
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses,
      meta: { title: 'Kurslar' }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { title: 'Sozlamalar' }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/dashboard'
    }
  ],
})

// Route title o'zgartirish
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'O\'quv Markaz'
  next()
})

export default router