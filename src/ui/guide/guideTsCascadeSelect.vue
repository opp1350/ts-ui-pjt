<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsCascadeSelect 가이드</a></h2>
        <div>
            <label for="cascadeSelectInput1">basic </label>
            <ts-cascade-select v-model="cascadeSelect_val1"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsCascadeSelect',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
            cascadeSelect_val1: ''
        }
    },
    methods: {
    }
}
</script>