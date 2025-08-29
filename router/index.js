import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Registration from '../views/Registration.vue'
import Results from '../views/Results.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/course', name: 'Course', component: Course },
  { path: '/registration', name: 'Registration', component: Registration },
  { path: '/results', name: 'Results', component: Results },
  { path: '/contact', name: 'Contact', component: Contact },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
