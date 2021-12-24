// 가이드 라우터만 따로 모을 수 없는지?
import GuideHome from "@/ui/guide/guideHome.vue";
import TsInputTextDemo from "@/ui/demo/tsInput/tsInputTextDemo.vue";
import TsButtonDemo from "@/ui/demo/tsButton/tsButtonDemo.vue";
import TsCheckboxDemo from "@/ui/demo/tsCheckbox/tsCheckboxDemo.vue";
import TsRadioButtonDemo from "@/ui/demo/tsRadio/tsRadioButtonDemo.vue";
import TsCalendarDemo from "@/ui/demo/tsCalendar/tsCalendarDemo.vue";
import TsTabViewDemo from "@/ui/demo/tsTabView/tsTabViewDemo.vue";
import TsInputMaskDemo from "@/ui/demo/tsInput/tsInputMaskDemo.vue";

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
                path: 'tsInputMask',
                name: 'tsInputMask',
                component: TsInputMaskDemo
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
                component: TsRadioButtonDemo
            },
            {
                path: 'tsCalendar',
                name: 'tsCalendar',
                component: TsCalendarDemo
            },
            {
                path: 'tsTabView',
                name: 'tsTabView',
                component: TsTabViewDemo
            }
        ]
    }
]

export default routes;