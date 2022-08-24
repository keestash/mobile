import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Login from '../views/Login.vue'
import Settings from '../views/Settings.vue'
import PasswordManager from '../views/PasswordManager.vue'
import EdgeDetail from '../views/EdgeDetail.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/PasswordManager',
        name: 'PasswordManager',
        component: PasswordManager
    },
    {
        path: '/EdgeDetail',
        name: 'EdgeDetail',
        component: EdgeDetail
    },
    {
        path: '/Settings',
        name: 'Settings',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
