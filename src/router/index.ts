import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/arena/rta/index.vue";
import B from "@/arena/rtb/index.vue";

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
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
