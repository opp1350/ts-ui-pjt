import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router/rootRoutes.js'
import PrimeVue from 'primevue/config'
import DarkMode from './ui/theme/darkMode.vue'
import CodeHighlight from './AppCodeHighlight';
// components
import tsButton from './ts/components/tsButton/tsButton.vue'
import tsInput from './ts/components/tsInput/tsInput.vue'
import tsInputGroup from './ts/components/tsInput/tsInputGroup.vue'
import tsCheckbox from './ts/components/tsCheckbox/tsCheckbox.vue'
import tsInputText from './ts/components/tsInput/tsInputText.vue'
import tsRadioButton from './ts/components/tsRadio/tsRadioButton.vue'
import tsCalendar from './ts/components/tsCalendar/tsCalendar.vue'
import tsTabView from './ts/components/tsTabView/tsTabView.vue'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import tsInputMask from './ts/components/tsInput/tsInputMask.vue'
import tsKnob from './ts/components/tsKnob/tsKnob.vue'
import tsListbox from './ts/components/tsListbox/tsListbox.vue'
import tsMultiSelect from './ts/components/tsMultiSelect/tsMultiSelect.vue'
import tsPanel from './ts/components/tsPanel/tsPanel.vue'
import tsPassword from './ts/components/tsPassword/tsPassword.vue'
import tsRating from './ts/components/tsRating/tsRating.vue'
import tsScrollPanel from './ts/components/tsScrollPanel/tsScrollPanel.vue'
import tsSelectButton from './ts/components/tsSelectButton/tsSelectButton.vue'
import tsAccordion from './ts/components/tsAccordion/tsAccordion.vue'
import tsAccordionTab from './ts/components/tsAccordion/tsAccordionTab.vue'

// css
import 'primevue/resources/themes/saga-blue/theme.css' // default theme
import 'primevue/resources/primevue.min.css' // primevue core css
import 'primeicons/primeicons.css' //icons
import 'prismjs/themes/prism-coy.css' // prismjs
import './assets/css/style.scss' // ts

const app = createApp(App);
app.use(PrimeVue, {
    ripple: true,
    locale: {
        startsWith: 'Starts with',
        contains: 'Contains',
        notContains: 'Not contains',
        endsWith: 'Ends with',
        equals: 'Equals',
        notEquals: 'Not equals',
        noFilter: 'No Filter',
        lt: 'Less than',
        lte: 'Less than or equal to',
        gt: 'Greater than',
        gte: 'Greater than or equal to',
        dateIs: 'Date is',
        dateIsNot: 'Date is not',
        dateBefore: 'Date is before',
        dateAfter: 'Date is after',
        clear: 'Clear',
        apply: '적용',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        addRule: 'Add Rule',
        removeRule: 'Remove Rule',
        accept: '예',
        reject: '아니오',
        choose: '선택',
        upload: '업로드',
        cancel: '취소',
        dayNames: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        today: 'Today',
        weekHeader: 'Wk',
        firstDayOfWeek: 0,
        dateFormat: 'yy/mm/dd',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password',
        emptyFilterMessage: 'No results found',
        emptyMessage: 'No available options'
    }
});
app.use(router).mount('#app');
// components
app.component('ts-button', tsButton);
app.component('ts-input', tsInput);
app.component('ts-input-group', tsInputGroup);
app.component('ts-checkbox', tsCheckbox);
app.component('ts-input-text', tsInputText);
app.component('ts-radio-button', tsRadioButton);
app.component('ts-calendar', tsCalendar);
app.component('dark-mode', DarkMode);
app.component('ts-tabview', tsTabView);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('ts-input-mask', tsInputMask);
app.component('ts-knob', tsKnob);
app.component('ts-listbox', tsListbox);
app.component('ts-multi-select', tsMultiSelect);
app.component('ts-panel', tsPanel);
app.component('ts-password', tsPassword);
app.component('ts-rating', tsRating);
app.component('ts-scroll-panel', tsScrollPanel);
app.component('ts-select-button', tsSelectButton);
app.component('ts-accordion', tsAccordion);
app.component('ts-accordiontab', tsAccordionTab);

app.directive('code', CodeHighlight);