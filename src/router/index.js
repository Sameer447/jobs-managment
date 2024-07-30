import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Views/HomeView.vue'
import JobsView from '@/Views/JobsView.vue'
import JobView from '@/Views/JobView.vue'
import AddJobView from '@/Views/AddJobView.vue'
import EditJobView from '@/Views/EditJobView.vue'
import NotFoundView from '@/Views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'job',
    component: JobView
  },
  {
    path: '/add-job',
    name: 'add-job',
    component: AddJobView
  },
  {
    path: '/edit-job/:id',
    name: 'edit-job',
    component: EditJobView
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
