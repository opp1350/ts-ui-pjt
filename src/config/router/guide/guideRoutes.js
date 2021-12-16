// 가이드 라우터만 따로 모을 수 없는지?
import GuideHome from "@/ui/guide/guideHome.vue";
import TsInputDemo from "@/ui/demo/tsInput/tsInputDemo.vue";
import TsRadioDemo from "@/ui/demo/tsRadio/tsRadioDemo.vue";
import TsButtonDemo from "@/ui/demo/tsButton/tsButtonDemo.vue";

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
                component: TsInputDemo
            },
            {
                path: 'tsRadio',
                name: 'tsRadio',
                component: TsRadioDemo
            },
            {
                path: 'tsButton',
                name: 'tsButton',
                component: TsButtonDemo
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