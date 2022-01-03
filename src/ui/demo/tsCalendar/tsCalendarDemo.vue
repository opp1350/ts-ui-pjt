<template>
    <div>
        <h5>Popup</h5>
        <div class="p-fluid p-grid p-formgrid">
            <div class="p-field p-col-12 p-md-4">
                <label for="basic">Basic</label>
                <ts-calendar id="basic" v-model="date1" autocomplete="off"></ts-calendar>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="dateformat">DateFormat</label>
                <ts-calendar id="dateformat" v-model="date2" date-format="yy-mm-dd"></ts-calendar>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="icon">Icon</label>
                <ts-calendar id="icon" v-model="date3" :showIcon="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="minmax">MinMax</label>
                <ts-calendar id="minmax" v-model="date4" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="disableddays">Disabled Days</label>
                <ts-calendar id="disableddays" v-model="date5" :disabledDates="invalidDates" :disabledDays="[0,6]" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="multiple">Multiple</label>
                <ts-calendar id="multiple" v-model="dates1" selectionMode="multiple" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="range">Range</label>
                <ts-calendar id="range" v-model="dates2" selectionMode="range" :manualInput="false" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="buttonbar">Button Bar</label>
                <ts-calendar id="buttonbar" v-model="date6" :showButtonBar="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="time24">Time / 24h</label>
                <ts-calendar id="time24" v-model="date7" :showTime="true" :showSeconds="true" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="time12">Time / 12h</label>
                <ts-calendar id="time12" v-model="date8" :timeOnly="true" hourFormat="12" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="monthpicker">Month Picker</label>
                <ts-calendar id="monthpicker" v-model="date9" view="month" dateFormat="yy/mm"  />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="yearpicker">Year Picker</label>
                <ts-calendar id="yearpicker" v-model="date10" view="year" dateFormat="yy"/>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="multiplemonths">Multiple Months</label>
                <ts-calendar id="multiplemonths" v-model="date11" :numberOfMonths="3" :responsiveOptions="responsiveOptions" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="datetemplate">Date Template</label>
                <ts-calendar id="datetemplate" v-model="date12">
                    <template #date="slotProps">
                        <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" class="special-day">{{slotProps.date.day}}</strong>
                        <template v-else>{{slotProps.date.day}}</template>
                    </template>
                </ts-calendar>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="touchUI">TouchUI</label>
                <ts-calendar id="touchUI" v-model="date13" :touchUI="true" />
            </div>
        </div>

        <h5>Inline</h5>
        <ts-calendar v-model="date14" :inline="true" :showWeek="true" />

        <TsCalendarDoc />
    </div>
</template>

<script>
import { ref } from 'vue'
import TsCalendarDoc from './tsCalendarDoc.vue'
export default {
    components: {
        TsCalendarDoc
    },
    setup() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        const minDate = ref(new Date());
        const maxDate = ref(new Date());
        const invalidDates = ref();
        const date1 = ref();
        const date2 = ref();
        const date3 = ref();
        const date4 = ref();
        const date5 = ref();
        const date6 = ref();
        const date7 = ref();
        const date8 = ref();
        const date9 = ref();
        const date10 = ref();
        const date11 = ref();
        const date12 = ref();
        const date13 = ref();
        const date14 = ref();
        const dates1 = ref();
        const dates2 = ref();
        const responsiveOptions = ref([
            {
                breakpoint: '1400px',
                numMonths: 2
            },
            {
                breakpoint: '1200px',
                numMonths: 1
            }
        ]);

        minDate.value.setMonth(prevMonth);
        minDate.value.setFullYear(prevYear);
        maxDate.value.setMonth(nextMonth);
        maxDate.value.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        invalidDates.value = [today, invalidDate];

        return { minDate, maxDate, invalidDates, date1, date2, date3, date4, date5, date6, date7,
            date8, date9, date10, date11, date12, date13, date14, dates1, dates2, responsiveOptions }
    }
}
</script>

<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>