<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsCalendar 가이드</a></h2>
        <div>
            <label for="calendarInput1">basic </label>
            <ts-calendar v-model="calendar_val1"/>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'GuideTsCalendar',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
            calendar_val1: ''
        }
    },
    methods: {
    }
}
</script>