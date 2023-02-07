import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Profile from '../pages/Profile.vue'


const routes = [
    { name: 'Home', path: '/', component: Home },
    { name: 'Login', path: '/Login', component: Login, meta: { requiresAuth: false }},
    { name: 'Profile', path: '/Profile', component: Profile, meta: { requiresAuth: true } }, 
]

const router = createRouter({history: createWebHistory(),routes})
    router.beforeEach((to: RouteLocationNormalized) => {
        if (to.meta.requiresAuth && !localStorage.getItem('token')) {
            return { name: 'Login' }
    }
})

export default router