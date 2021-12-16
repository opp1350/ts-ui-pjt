// 가이드 라우터만 따로 모을 수 없는지?
import GuideHome from "@/ui/guide/guideHome.vue";
import GuideTsInput from "@/ui/guide/guideTsInput.vue";
import GuideTsRadio from "@/ui/guide/guideTsRadio.vue";

const routes = [{
        path: "/",
        name: 'guideHome',
        component: GuideHome
    },
    {
        path: '/components',
        name: 'components',
        component: GuideHome,
        children: [{
                path: 'tsInput',
                name: 'tsInput',
                component: GuideTsInput
            },
            {
                path: 'tsRadio',
                name: 'tsRadio',
                component: GuideTsRadio
            }
        ]
    }
    // {
    //     path: '/tsInput',
    //     name: 'tsInput',
    //     component: GuideTsInput
    // },
    // {
    //     path: '/tsRadio',
    //     name: 'tsRadio',
    //     component: GuideTsRadio
    // }
]

export default routes;