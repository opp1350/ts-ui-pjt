<template>
  <Calendar v-model="value" :modelValue="modelValue" :selectionMode="selectionMode" :dateFormat="dateFormat" :inline="inline" :showOtherMonths="showOtherMonths"
  :selectOtherMonths="selectOtherMonths" :showIcon="showIcon" :icon="icon" :numberOfMonths="numberOfMonths" :responsiveOptions="responsiveOptions" :view="view" :touchUI="touchUI"
  :monthNavigator="monthNavigator" :yearNavigator="yearNavigator" :yearRange="yearRange" :panelClass="panelClass" :minDate="minDate" :maxDate="maxDate" :disabledDates="disabledDates"
  :disabledDays="disabledDays" :maxDateCount="maxDateCount" :showOnFocus="showOnFocus" :autoZIndex="autoZIndex" :baseZIndex="baseZIndex" :showButtonBar="showButtonBar" 
  :shortYearCutoff="shortYearCutoff" :showTime="showTime" :timeOnly="timeOnly" :hourFormat="hourFormat" :stepHour="stepHour" :stepMinute="stepMinute" :stepSecond="stepSecond"
  :showSeconds="showSeconds" :hideOnDateTimeSelect="hideOnDateTimeSelect" :timeSeparator="timeSeparator" :showWeek="showWeek" :manualInput="manualInput" :appendTo="appendTo"
  :keepInvalid="keepInvalid" :inputClass="inputClass" :inputStyle="inputStyle" />
</template>
 
<script>
import Calendar from 'primevue/calendar';
export default {
  name: 'tsCalendar',
  components: {
      Calendar
  },
  data() {
    return {
      value: null
    }
  },
	props: {
    modelValue: null,
    selectionMode: {
        type: String,
        default: 'single'
    },
    dateFormat: {
        type: String,
        default: null
    },
    inline: {
        type: Boolean,
        default: false
    },
    showOtherMonths: {
        type: Boolean,
        default: true
    },
    selectOtherMonths: {
        type: Boolean,
        default: false
    },
    showIcon: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: 'pi pi-calendar'
    },
    numberOfMonths: {
        type: Number,
        default: 1
    },
    responsiveOptions: Array,
    view: {
        type: String,
        default: 'date'
    },
    touchUI: {
        type: Boolean,
        default: false
    },
    monthNavigator: {
        type: Boolean,
        default: false
    },
    yearNavigator: {
        type: Boolean,
        default: false
    },
    yearRange: {
        type: String,
        default: null
    },
    panelClass: {
        type: String,
        default: null
    },
    minDate: {
        type: Date,
        value: null
    },
    maxDate: {
        type: Date,
        value: null
    },
    disabledDates: {
        type: Array,
        value: null
    },
    disabledDays: {
        type: Array,
        value: null
    },
    maxDateCount: {
        type: Number,
        value: null
    },
    showOnFocus: {
        type: Boolean,
        default: true
    },
    autoZIndex: {
        type: Boolean,
        default: true
    },
    baseZIndex: {
        type: Number,
        default: 0
    },
    showButtonBar: {
        type: Boolean,
        default: false
    },
    shortYearCutoff: {
        type: String,
        default: '+10'
    },
    showTime: {
        type: Boolean,
        default: false
    },
    timeOnly: {
        type: Boolean,
        default: false
    },
    hourFormat: {
        type: String,
        default: '24'
    },
    stepHour: {
        type: Number,
        default: 1
    },
    stepMinute: {
        type: Number,
        default: 1
    },
    stepSecond: {
        type: Number,
        default: 1
    },
    showSeconds: {
        type: Boolean,
        default: false
    },
    hideOnDateTimeSelect: {
        type: Boolean,
        default: false
    },
    timeSeparator: {
        type: String,
        default: ':'
    },
    showWeek: {
        type: Boolean,
        default: false
    },
    manualInput: {
        type: Boolean,
        default: true
    },
    appendTo: {
        type: String,
        default: 'body'
    },
    keepInvalid: {
        type: Boolean,
        default: false
    },
    inputClass: null,
    inputStyle: null,
    class: null,
    style: null
  }
}
</script>