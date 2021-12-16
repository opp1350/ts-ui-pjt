// guideroutes.js 만 import 하도록 수정(아래 내용 guideRoutes로 옮기기)
import { createWebHistory, createRouter } from "vue-router";
import GuidRoutes from "@/config/router/guide/guideRoutes.js"
import NotFound from "@/ui/error/page404.vue";

const routes = [
    ...GuidRoutes,
    {
        path: '/NotFound',
        name: "NotFound",
        component: NotFound
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/NotFound"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;