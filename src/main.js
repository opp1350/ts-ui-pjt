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
import tsInputNumber from './ts/components/tsInput/tsInputNumber.vue'
import tsAutoComplete from './ts/components/tsAutoComplete/tsAutoComplete.vue'
import tsCard from './ts/components/tsCard/tsCard.vue'
import tsCascadeSelect from './ts/components/tsCascadeSelect/tsCascadeSelect.vue'
import tsChips from './ts/components/tsChips/tsChips.vue'
import tsColorPicker from './ts/components/tsColorPicker/tsColorPicker.vue'
import tsDropdown from './ts/components/tsDropdown/tsDropdown.vue'
import tsSlider from './ts/components/tsSlider/tsSlider.vue'
import tsSpeedDial from './ts/components/tsSpeedDial/tsSpeedDial.vue'
import tsSplitButton from './ts/components/tsSplitButton/tsSplitButton.vue'
import tsSplitter from './ts/components/tsSplitter/tsSplitter.vue'
import tsTextarea from './ts/components/tsTextarea/tsTextarea.vue'
import tsToggleButton from './ts/components/tsToggleButton/tsToggleButton.vue'
import tsToolbar from './ts/components/tsToolbar/tsToolbar.vue'
import tsTreeSelect from './ts/components/tsTreeSelect/tsTreeSelect.vue'
import tsTriStateCheckbox from './ts/components/tsTriStateCheckbox/tsTriStateCheckbox.vue'
import tsProgressBar from './ts/components/tsProgressBar/tsProgressBar.vue'
import tsProgressSpinner from './ts/components/tsProgressSpinner/tsProgressSpinner.vue'
import tsDataTable from './ts/components/tsDataTable/tsDataTable.vue'
import tsColumn from './ts/components/tsColumn/tsColumn.vue'
import tsColumnGroup from './ts/components/tsColumnGroup/tsColumnGroup.vue'
import tsConfirmDialog from './ts/components/tsConfirmDialog/tsConfirmDialog.vue'
import tsDialog from './ts/components/tsDialog/tsDialog.vue'

import Tooltip from 'primevue/tooltip'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import axios from 'axios'
import ConfirmationService from 'primevue/confirmationservice'

// css
import 'primevue/resources/themes/saga-blue/theme.css' // default theme
import 'primevue/resources/primevue.min.css' // primevue core css
import 'primeicons/primeicons.css' //icons
import './assets/css/style.scss' // ts

const app = createApp(App);
app.config.globalProperties.$http = axios;
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
        apply: '??????',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        addRule: 'Add Rule',
        removeRule: 'Remove Rule',
        accept: '???',
        reject: '?????????',
        choose: '??????',
        upload: '?????????',
        cancel: '??????',
        dayNames: ["???", "???", "???", "???", "???", "???", "???"],
        dayNamesShort: ["???", "???", "???", "???", "???", "???", "???"],
        dayNamesMin: ["???", "???", "???", "???", "???", "???", "???"],
        monthNames: ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
        monthNamesShort: ["1???", "2???", "3???", "4???", "5???", "6???", "7???", "8???", "9???", "10???", "11???", "12???"],
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

// primevue
app.use(ConfirmationService);

// primevue directive
app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

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
app.component('ts-input-number', tsInputNumber);
app.component('ts-autocomplete', tsAutoComplete);
app.component('ts-card', tsCard);
app.component('ts-cascadeselect', tsCascadeSelect);
app.component('ts-chips', tsChips);
app.component('ts-colorpicker', tsColorPicker);
app.component('ts-dropdown', tsDropdown);
app.component('ts-slider', tsSlider);
app.component('ts-speeddial', tsSpeedDial);
app.component('ts-splitbutton', tsSplitButton);
app.component('ts-splitter', tsSplitter);
app.component('ts-textarea', tsTextarea);
app.component('ts-togglebutton', tsToggleButton);
app.component('ts-toolbar', tsToolbar);
app.component('ts-treeselect', tsTreeSelect);
app.component('ts-tristatecheckbox', tsTriStateCheckbox);
app.component('ts-progressbar', tsProgressBar);
app.component('ts-progress-spinner', tsProgressSpinner);
app.component('ts-data-table', tsDataTable);
app.component('ts-column', tsColumn);
app.component('ts-column-group', tsColumnGroup);
app.component('ts-confirm-dialog', tsConfirmDialog);
app.component('ts-dialog', tsDialog);

app.directive('code', CodeHighlight);