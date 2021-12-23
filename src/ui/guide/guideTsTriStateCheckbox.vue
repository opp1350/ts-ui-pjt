<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsTriStateCheckbox 가이드</a></h2>
        <div>
            <label for="triStateCheckboxInput1">basic </label>
            <ts-tri-state-checkbox v-model="triStateCheckbox_val1" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsTriStateCheckbox',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
            triStateCheckbox_val1: null,
        }
    },
    methods: {
    }
}
</script>