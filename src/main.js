import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router/rootRoutes.js'
import PrimeVue from 'primevue/config'
// components
import tsButton from './ts/components/tsButton/tsButton.vue'
import tsInput from './ts/components/tsInput/tsInput.vue'
import tsInputGroup from './ts/components/tsInput/tsInputGroup.vue'
//2021-12-16 김연숙(사용에 문제가 없을 경우 위와 합쳐 주세요. 부장님 지시로 기능 없는 컴포넌트 등록을 우선으로 하였습니다.)
//checkbox
import tsCheckbox from './ts/components/tsCheckbox/tsCheckbox.vue'
//form
import tsAutoComplete from './ts/components/tsForm/tsAutoComplete.vue'
import tsCalendar from './ts/components/tsForm/tsCalendar.vue'
import tsCascadeSelect from './ts/components/tsForm/tsCascadeSelect.vue'
import tsChips from './ts/components/tsForm/tsChips.vue'
import tsColorPicker from './ts/components/tsForm/tsColorPicker.vue'
import tsDropdown from './ts/components/tsForm/tsDropdown.vue'
// 주석 해제 후 quill install 시 사용 가능(npm install --save quill)
// import tsEditor from './ts/components/tsForm/tsEditor.vue'
import tsKnob from './ts/components/tsForm/tsKnob.vue'
import tsListbox from './ts/components/tsForm/tsListbox.vue'
import tsMultiSelect from './ts/components/tsForm/tsMultiSelect.vue'
import tsPassword from './ts/components/tsForm/tsPassword.vue'
import tsRadioButton from './ts/components/tsForm/tsRadioButton.vue'
import tsRating from './ts/components/tsForm/tsRating.vue'
import tsSelectButton from './ts/components/tsForm/tsSelectButton.vue'
import tsSlider from './ts/components/tsForm/tsSlider.vue'
import tsTextarea from './ts/components/tsForm/tsTextarea.vue'
import tsToggleButton from './ts/components/tsForm/tsToggleButton.vue'
import tsTreeSelect from './ts/components/tsForm/tsTreeSelect.vue'
import tsTriStateCheckbox from './ts/components/tsForm/tsTriStateCheckbox.vue'
//button
import tsSpeedDial from './ts/components/tsButton/tsSpeedDial.vue'
import tsSplitButton from './ts/components/tsButton/tsSplitButton.vue'
//panel
import tsAccordion from './ts/components/tsPanel/tsAccordion.vue'
import tsAccordionTab from './ts/components/tsPanel/tsAccordionTab.vue'
import tsCard from './ts/components/tsPanel/tsCard.vue'
import tsDeferredContent from './ts/components/tsPanel/tsDeferredContent.vue'
import tsDivider from './ts/components/tsPanel/tsDivider.vue'
import tsFieldset from './ts/components/tsPanel/tsFieldset.vue'
import tsPanel from './ts/components/tsPanel/tsPanel.vue'
import tsSplitter from './ts/components/tsPanel/tsSplitter.vue'
import tsSplitterPanel from './ts/components/tsPanel/tsSplitterPanel.vue'
import tsScrollPanel from './ts/components/tsPanel/tsScrollPanel.vue'
import tsTabView from './ts/components/tsPanel/tsTabView.vue'
import tsTabPanel from './ts/components/tsPanel/tsTabPanel.vue'
import tsToolbar from './ts/components/tsPanel/tsToolbar.vue'

// css
import 'primevue/resources/themes/saga-blue/theme.css' // default theme
import 'primevue/resources/primevue.min.css' // primevue core css
import 'primeicons/primeicons.css' //icons
import './assets/css/style.scss' // ts

const app = createApp(App);
app.use(PrimeVue);
app.use(router).mount('#app');
// components
app.component('ts-button', tsButton);
app.component('ts-input', tsInput);
app.component('ts-input-group', tsInputGroup);
//2021-12-16 김연숙
//checkbox
app.component('ts-checkbox', tsCheckbox);
//form
app.component('ts-auto-complete', tsAutoComplete);
app.component('ts-calendar', tsCalendar);
app.component('ts-cascade-select', tsCascadeSelect);
app.component('ts-chips', tsChips);
app.component('ts-color-picker', tsColorPicker);
app.component('ts-dropdown', tsDropdown);
// app.component('ts-editor', tsEditor);
app.component('ts-knob', tsKnob);
app.component('ts-listbox', tsListbox);
app.component('ts-multi-select', tsMultiSelect);
app.component('ts-password', tsPassword);
app.component('ts-radio-button', tsRadioButton);
app.component('ts-rating', tsRating);
app.component('ts-select-button', tsSelectButton);
app.component('ts-slider', tsSlider);
app.component('ts-textarea', tsTextarea);
app.component('ts-toggle-button', tsToggleButton);
app.component('ts-tree-select', tsTreeSelect);
app.component('ts-tri-state-checkbox', tsTriStateCheckbox);
//button
app.component('ts-speed-dial', tsSpeedDial);
app.component('ts-split-button', tsSplitButton);
//panel
app.component('ts-accordion', tsAccordion);
app.component('ts-accordion-tab', tsAccordionTab);
app.component('ts-card', tsCard);
app.component('ts-deferred-content', tsDeferredContent);
app.component('ts-divider', tsDivider);
app.component('ts-fieldset', tsFieldset);
app.component('ts-panel', tsPanel);
app.component('ts-splitter', tsSplitter);
app.component('ts-splitter-panel', tsSplitterPanel);
app.component('ts-scroll-panel', tsScrollPanel);
app.component('ts-tab-view', tsTabView);
app.component('ts-tab-panel', tsTabPanel);
app.component('ts-toolbar', tsToolbar);