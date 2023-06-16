import {createRouter,createWebHistory} from 'vue-router'
import Register from '../components/auth/Register.vue';
import Login from '../components/auth/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    {
        path:'/',
        name:"Dashboard",
        component: Dashboard
    },
    {
        path:'/register',
        name:"Register",
        component: Register
    },   {
        path:'/login',
        name:"Login",
        component: Login
    }

]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;
