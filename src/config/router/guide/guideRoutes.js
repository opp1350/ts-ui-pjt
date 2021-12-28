// 가이드 라우터만 따로 모을 수 없는지?
import GuideHome from "@/ui/guide/guideHome.vue";
import TsInputTextDemo from "@/ui/demo/tsInput/tsInputTextDemo.vue";
import TsButtonDemo from "@/ui/demo/tsButton/tsButtonDemo.vue";
import TsCheckboxDemo from "@/ui/demo/tsCheckbox/tsCheckboxDemo.vue";
import TsRadioButtonDemo from "@/ui/demo/tsRadio/tsRadioButtonDemo.vue";
import TsCalendarDemo from "@/ui/demo/tsCalendar/tsCalendarDemo.vue";
import TsTabViewDemo from "@/ui/demo/tsTabView/tsTabViewDemo.vue";
import TsInputMaskDemo from "@/ui/demo/tsInput/tsInputMaskDemo.vue";
import TsKnobDemo from "@/ui/demo/tsKnob/tsKnobDemo.vue";
import TsListboxDemo from "@/ui/demo/tsListbox/tsListboxDemo.vue";
import TsMultiSelectDemo from "@/ui/demo/tsMultiSelect/tsMultiSelectDemo.vue";
import TsPanelDemo from "@/ui/demo/tsPanel/tsPanelDemo.vue";
import TsPasswordDemo from "@/ui/demo/tsPassword/tsPasswordDemo.vue";
import TsRatingDemo from "@/ui/demo/tsRating/tsRatingDemo.vue";
import TsScrollPanelDemo from "@/ui/demo/tsScrollPanel/tsScrollPanelDemo.vue";
import TsSelectButtonDemo from "@/ui/demo/tsSelectButton/tsSelectButtonDemo.vue";
import TsAccordionDemo from "@/ui/demo/tsAccordion/tsAccordionDemo.vue";

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
                path: 'tsAccordion',
                name: 'tsAccordion',
                component: TsAccordionDemo
            },
            {
                path: 'tsButton',
                name: 'tsButton',
                component: TsButtonDemo
            },
            {
                path: 'tsCalendar',
                name: 'tsCalendar',
                component: TsCalendarDemo
            },
            {
                path: 'tsCheckbox',
                name: 'tsCheckbox',
                component: TsCheckboxDemo
            },
            {
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
                path: 'tsRadioButton',
                name: 'tsRadioButton',
                component: TsRadioButtonDemo
            },
            {
                path: 'tsTabView',
                name: 'tsTabView',
                component: TsTabViewDemo
            },
            {
                path: 'tsKnob',
                name: 'tsKnob',
                component: TsKnobDemo
            },
            {
                path: 'tsListbox',
                name: 'tsListbox',
                component: TsListboxDemo
            },
            {
                path: 'tsMultiSelect',
                name: 'tsMultiSelect',
                component: TsMultiSelectDemo
            },
            {
                path: 'tsPanel',
                name: 'tsPanel',
                component: TsPanelDemo
            },
            {
                path: 'tsPassword',
                name: 'tsPassword',
                component: TsPasswordDemo
            },
            {
                path: 'tsRating',
                name: 'tsRating',
                component: TsRatingDemo
            },
            {
                path: 'tsScrollPanel',
                name: 'tsScrollPanel',
                component: TsScrollPanelDemo
            },
            {
                path: 'tsSelectButton',
                name: 'tsSelectButton',
                component: TsSelectButtonDemo
            }
        ]
    }
]

export default routes;