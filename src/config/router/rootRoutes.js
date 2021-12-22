// guideroutes.js 만 import 하도록 수정(아래 내용 guideRoutes로 옮기기)
import { createWebHistory, createRouter } from "vue-router";
import GuideMain from "@/ui/GuideMain.vue";
import tsGudieHome from "@/ui/guide/guideHome.vue";
import GuideTsInput from "@/ui/guide/guideTsInput.vue";
import GuideTsRadio from "@/ui/guide/guideTsRadio.vue";
import NotFound from "@/ui/error/page404.vue";
//2021-12-16 김연숙
import GuideTsCheckbox from "@/ui/guide/guidTsCheckbox.vue";
//form
import GuideTsAutoComplete from "@/ui/guide/guideTsAutoComplete.vue";
import GuideTsCalendar from "@/ui/guide/guideTsCalendar.vue";
import GuideTsCascadeSelect from "@/ui/guide/guideTsCascadeSelect.vue";
import GuideTsChips from "@/ui/guide/guideTsChips.vue";
import GuideTsColorPicker from "@/ui/guide/guideTsColorPicker.vue";
import GuideTsDropdown from "@/ui/guide/guideTsDropdown.vue";
import GuideTsEditor from "@/ui/guide/guideTsEditor.vue";
import GuideTsKnob from "@/ui/guide/guideTsKnob.vue";
import GuideTsListbox from "@/ui/guide/guideTsListbox.vue";
import GuideTsMultiSelect from "@/ui/guide/guideTsMultiSelect.vue";
import GuideTsPassword from "@/ui/guide/guideTsPassword.vue";
import GuideTsRating from "@/ui/guide/guideTsRating.vue";
import GuideTsSelectButton from "@/ui/guide/guideTsSelectButton.vue";
import GuideTsSlider from "@/ui/guide/guideTsSlider.vue";
import GuideTsTextarea from "@/ui/guide/guideTsTextarea.vue";
import GuideTsToggleButton from "@/ui/guide/guideTsToggleButton.vue";
import GuideTsTreeSelect from "@/ui/guide/guideTsTreeSelect.vue";
import GuideTsTriStateCheckbox from "@/ui/guide/guideTsTriStateCheckbox.vue";
//button
import GuideTsButton from "@/ui/guide/guideTsButton.vue";
import GuideTsSpeedDial from "@/ui/guide/guideTsSpeedDial.vue";
import GuideTsSplitButton from "@/ui/guide/guideTsSplitButton.vue";
//panel
import GuideTsAccordion from "@/ui/guide/guideTsAccordion.vue";
import GuideTsCard from "@/ui/guide/guideTsCard.vue";
import GuideTsDeferredContent from "@/ui/guide/guideTsDeferredContent.vue";
import GuideTsDivider from "@/ui/guide/guideTsDivider.vue";
import GuideTsFieldset from "@/ui/guide/guideTsFieldset.vue";
import GuideTsPanel from "@/ui/guide/guideTsPanel.vue";
import GuideTsScrollPanel from "@/ui/guide/guideTsScrollPanel.vue";
import GuideTsSplitter from "@/ui/guide/guideTsSplitter.vue";
import GuideTsTabView from "@/ui/guide/guideTsTabView.vue";
import GuideTsToolbar from "@/ui/guide/guideTsToolbar.vue";

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
            },
            //2021-12-16 김연숙
            {
                path: 'tsCheckbox',
                component: GuideTsCheckbox,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsAutoComplete',
                component: GuideTsAutoComplete,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsCalendar',
                component: GuideTsCalendar,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsCascadeSelect',
                component: GuideTsCascadeSelect,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsChips',
                component: GuideTsChips,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsColorPicker',
                component: GuideTsColorPicker,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsDropdown',
                component: GuideTsDropdown,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsEditor',
                component: GuideTsEditor,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsKnob',
                component: GuideTsKnob,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsListbox',
                component: GuideTsListbox,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsMultiSelect',
                component: GuideTsMultiSelect,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsPassword',
                component: GuideTsPassword,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsRating',
                component: GuideTsRating,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsSelectButton',
                component: GuideTsSelectButton,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsSlider',
                component: GuideTsSlider,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsTextarea',
                component: GuideTsTextarea,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsToggleButton',
                component: GuideTsToggleButton,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsTreeSelect',
                component: GuideTsTreeSelect,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsTriStateCheckbox',
                component: GuideTsTriStateCheckbox,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsButton',
                component: GuideTsButton,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsSpeedDial',
                component: GuideTsSpeedDial,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsSplitButton',
                component: GuideTsSplitButton,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsAccordion',
                component: GuideTsAccordion,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsCard',
                component: GuideTsCard,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsDeferredContent',
                component: GuideTsDeferredContent,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsDivider',
                component: GuideTsDivider,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsFieldset',
                component: GuideTsFieldset,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsPanel',
                component: GuideTsPanel,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsScrollPanel',
                component: GuideTsScrollPanel,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsSplitter',
                component: GuideTsSplitter,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsTabView',
                component: GuideTsTabView,
                meta: { requiresAuth: false }
            },
            {
                path: 'tsToolbar',
                component: GuideTsToolbar,
                meta: { requiresAuth: false }
            },
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