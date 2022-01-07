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
import TsInputNumberDemo from "@/ui/demo/tsInput/tsInputNumberDemo.vue";
import TsAutoCompleteDemo from "@/ui/demo/tsAutoComplete/tsAutoCompleteDemo.vue";
import TsCardDemo from "@/ui/demo/tsCard/tsCardDemo.vue";
import TsCascadeSelectDemo from "@/ui/demo/tsCascadeSelect/tsCascadeSelectDemo.vue";
import TsChipsDemo from "@/ui/demo/tsChips/tsChipsDemo.vue";
import TsColorPickerDemo from "@/ui/demo/tsColorPicker/tsColorPickerDemo.vue";
import TsDropdownDemo from "@/ui/demo/tsDropdown/tsDropdownDemo.vue";
import TsSliderDemo from "@/ui/demo/tsSlider/tsSliderDemo.vue";
import TsSpeedDialDemo from "@/ui/demo/tsSpeedDial/tsSpeedDialDemo.vue";
import TsSplitButtonDemo from "@/ui/demo/tsSplitButton/tsSplitButtonDemo.vue";
import TsSplitterDemo from "@/ui/demo/tsSplitter/tsSplitterDemo.vue";
import TsTextareaDemo from "@/ui/demo/tsTextarea/tsTextareaDemo.vue";
import TsToggleButtonDemo from "@/ui/demo/tsToggleButton/tsToggleButtonDemo.vue";
import TsToolbarDemo from "@/ui/demo/tsToolbar/tsToolbarDemo.vue";
import TsTreeSelectDemo from "@/ui/demo/tsTreeSelect/tsTreeSelectDemo.vue";
import TsTriStateCheckboxDemo from "@/ui/demo/tsTriStateCheckbox/tsTriStateCheckboxDemo.vue";
import TsProgressBarDemo from "@/ui/demo/tsProgressBar/tsProgressBarDemo.vue";
import TsProgressSpinnerDemo from "@/ui/demo/tsProgressSpinner/tsProgressSpinnerDemo.vue";

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
            },
            {
                path: 'tsInputNumber',
                name: 'tsInputNumber',
                component: TsInputNumberDemo
            },
            {
                path: 'tsAutoComplete',
                name: 'tsAutoComplete',
                component: TsAutoCompleteDemo
            },
            {
                path: 'tsCard',
                name: 'tsCard',
                component: TsCardDemo
            },
            {
                path: 'tsCascadeSelect',
                name: 'tsCascadeSelect',
                component: TsCascadeSelectDemo
            },
            {
                path: 'tsChips',
                name: 'tsChips',
                component: TsChipsDemo
            },
            {
                path: 'tsColorPicker',
                name: 'tsColorPicker',
                component: TsColorPickerDemo
            },
            {
                path: 'tsDropdown',
                name: 'tsDropdown',
                component: TsDropdownDemo
            },
            {
                path: 'tsSlider',
                name: 'tsSlider',
                component: TsSliderDemo
            },
            {
                path: 'tsSpeedDial',
                name: 'tsSpeedDial',
                component: TsSpeedDialDemo
            },
            {
                path: 'tsSplitButton',
                name: 'tsSplitButton',
                component: TsSplitButtonDemo
            },
            {
                path: 'tsSplitter',
                name: 'tsSplitter',
                component: TsSplitterDemo
            },
            {
                path: 'tsTextarea',
                name: 'tsTextarea',
                component: TsTextareaDemo
            },
            {
                path: 'tsToggleButton',
                name: 'tsToggleButton',
                component: TsToggleButtonDemo
            },
            {
                path: 'tsToolbar',
                name: 'tsToolbar',
                component: TsToolbarDemo
            },
            {
                path: 'tsTreeSelect',
                name: 'tsTreeSelect',
                component: TsTreeSelectDemo
            },
            {
                path: 'tsTriStateCheckbox',
                name: 'tsTriStateCheckbox',
                component: TsTriStateCheckboxDemo
            },
            {
                path: 'tsProgressBar',
                name: 'tsProgressBar',
                component: TsProgressBarDemo
            },
            {
                path: 'tsProgressSpinner',
                name: 'tsProgressSpinner',
                component: TsProgressSpinnerDemo
            }
        ]
    }
]

export default routes;