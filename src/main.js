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
import tsAutoComplete from './ts/components/tsAutoComplete/tsAutoComplete.vue'
import tsCalendar from './ts/components/tsCalendar/tsCalendar.vue'
import tsCascadeSelect from './ts/components/tsCascadeSelect/tsCascadeSelect.vue'
import tsChips from './ts/components/tsChips/tsChips.vue'
import tsColorPicker from './ts/components/tsColorPicker/tsColorPicker.vue'
import tsDropdown from './ts/components/tsDropdown/tsDropdown.vue'
// 주석 해제 후 quill install 시 사용 가능(npm install --save quill)
// import tsEditor from './ts/components/tsEditor/tsEditor.vue'
import tsKnob from './ts/components/tsKnob/tsKnob.vue'
import tsListbox from './ts/components/tsListbox/tsListbox.vue'
import tsMultiSelect from './ts/components/tsMultiSelect/tsMultiSelect.vue'
import tsPassword from './ts/components/tsPassword/tsPassword.vue'
import tsRadio from './ts/components/tsRadio/tsRadio.vue'
import tsRating from './ts/components/tsRating/tsRating.vue'
import tsSelectButton from './ts/components/tsSelectButton/tsSelectButton.vue'
import tsSlider from './ts/components/tsSlider/tsSlider.vue'
import tsTextarea from './ts/components/tsTextarea/tsTextarea.vue'
import tsToggleButton from './ts/components/tsToggleButton/tsToggleButton.vue'
import tsTreeSelect from './ts/components/tsTreeSelect/tsTreeSelect.vue'
import tsTriStateCheckbox from './ts/components/tsTriStateCheckbox/tsTriStateCheckbox.vue'
//button
import tsSpeedDial from './ts/components/tsSpeedDial/tsSpeedDial.vue'
import tsSplitButton from './ts/components/tsSplitButton/tsSplitButton.vue'
//panel
import tsAccordion from './ts/components/tsAccordion/tsAccordion.vue'
import tsAccordionTab from './ts/components/tsAccordion/tsAccordionTab.vue'
import tsCard from './ts/components/tsCard/tsCard.vue'
import tsDeferredContent from './ts/components/tsDeferredContent/tsDeferredContent.vue'
import tsDivider from './ts/components/tsDivider/tsDivider.vue'
import tsFieldset from './ts/components/tsFieldset/tsFieldset.vue'
import tsPanel from './ts/components/tsPanel/tsPanel.vue'
import tsScrollPanel from './ts/components/tsScrollPanel/tsScrollPanel.vue'
import tsSplitter from './ts/components/tsSplitter/tsSplitter.vue'
import tsSplitterPanel from './ts/components/tsSplitter/tsSplitterPanel.vue'
import tsTabView from './ts/components/tsTabView/tsTabView.vue'
import tsTabPanel from './ts/components/tsTabView/tsTabPanel.vue'
import tsToolbar from './ts/components/tsToolbar/tsToolbar.vue'

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
app.component('ts-radio', tsRadio);
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
app.component('ts-scroll-panel', tsScrollPanel);
app.component('ts-splitter', tsSplitter);
app.component('ts-splitter-panel', tsSplitterPanel);
app.component('ts-tab-view', tsTabView);
app.component('ts-tab-panel', tsTabPanel);
app.component('ts-toolbar', tsToolbar);