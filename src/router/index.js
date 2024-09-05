import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "@/views/Dashboard.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    // {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: Dashboard,
    //     meta: { requiresAuth: true }
    // }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
