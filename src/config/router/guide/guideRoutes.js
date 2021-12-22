// 가이드 라우터만 따로 모을 수 없는지?
import GuideHome from "@/ui/guide/guideHome.vue";
import TsInputTextDemo from "@/ui/demo/tsInput/tsInputTextDemo.vue";
import TsButtonDemo from "@/ui/demo/tsButton/tsButtonDemo.vue";
import TsCheckboxDemo from "@/ui/demo/tsCheckbox/tsCheckboxDemo.vue";
import tsRadioButtonDemo from "@/ui/demo/tsRadio/tsRadioButtonDemo.vue";
import tsCalendarDemo from "@/ui/demo/tsCalendar/tsCalendarDemo.vue";

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
                path: 'tsInputText',
                name: 'tsInputText',
                component: TsInputTextDemo
            },
            {
                path: 'tsButton',
                name: 'tsButton',
                component: TsButtonDemo
            },
            {
                path: 'tsCheckbox',
                name: 'tsCheckbox',
                component: TsCheckboxDemo
            },
            {
                path: 'tsRadioButton',
                name: 'tsRadioButton',
                component: tsRadioButtonDemo
            },
            {
                path: 'tsCalendar',
                name: 'tsCalendar',
                component: tsCalendarDemo
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