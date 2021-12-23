<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsChips 가이드</a></h2>
        <div>
            <label for="chipInput1">basic </label>
            <ts-chips v-model="chips_val1"/>
        </div>
        <div>
            <label for="chipInput2">다른 구분자(예시: ,) </label>
            <ts-chips v-model="chips_val2" separator=","/>
        </div>
        <div>
            <!-- <label for="chipInput3">Templating</label>
            <ts-chips v-model="chips_val3">
                <template #chip="slotProps">
                    <div>
                        <span>{{slotProps.value}} - (active) </span>
                    </div>
                </template>
            </ts-chips> -->
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'GuideTsChips',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
            chips_val1: [],
            chips_val2: [],
            chips_val3: [],
        }
    },
    methods: {
    }
}
</script>