import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Home from "@/arena/rta/index.vue"
import B from "@/arena/rtb/index.vue"
import C from "@/arena/rtc"
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/b",
        name: "b",
        component: B,
    },
    {
        path: "/c",
        name: "c",
        component: C,
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/",
    },
]

/** 路由控制器 */
const router = createRouter({
    history: createWebHashHistory("/"),
    routes,
})

export default router
