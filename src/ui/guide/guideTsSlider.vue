<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsSlider 가이드</a></h2>
        <div>
            <label for="sliderInput1">basic </label>
            <ts-slider v-model="slider_val1"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsSlider',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
            slider_val1: 0
        }
    },
    methods: {
    }
}
</script>