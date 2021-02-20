import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
import Classify from "../components/Classify.vue"
import Mine from "../components/Mine.vue"
const routerHistory = createWebHistory()
    // createWebHashHistory hash 路由
    // createWebHistory history 路由
    // createMemoryHistory 带缓存 history 路由
const router = createRouter({
    history: routerHistory,
    routes: [{
            path: "/",
            component: Home
        },
        {
            path: "/classify",
            component: Classify
        },
        {
            path: "/mine",
            component: Mine
        },
    ]
})
export default router