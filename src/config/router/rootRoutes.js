// guideroutes.js 만 import 하도록 수정(아래 내용 guideRoutes로 옮기기)
import { createWebHistory, createRouter } from "vue-router";
import GuideMain from "@/ui/GuideMain.vue";
import tsGudieHome from "@/ui/guide/guideHome.vue";
import GuideTsInput from "@/ui/guide/guideTsInput.vue";
import GuideTsRadio from "@/ui/guide/guideTsRadio.vue";
import NotFound from "@/ui/error/page404.vue";

const routes = [{
        path: "/",
        redirect: '/GuideMain/tsGudieHome', // 추후 필요에 따라 수정 부탁드립니다.
    },
    {
        path: "/GuideMain",
        component: GuideMain,
        redirect: '/GuideMain/tsGudieHome',
        children: [{
                path: 'tsGudieHome',
                component: tsGudieHome,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsInput',
                component: GuideTsInput,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsRadio',
                component: GuideTsRadio,
                meta: { requiresAuth: false }
            }
        ]
    },
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
    routes,
});

export default router;