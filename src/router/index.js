import { createRouter,createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        name:'home',
        component: () => import ("../pages/home/index.vue")
    },
    {
        path:'/aboutme',
        name:'aboutme',
        component: () => import('../pages/aboutMe/index.vue')
    },
    {
        path:'/aboutweb',
        name:'aboutweb',
        component: () => import('../pages/aboutWeb/index.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router