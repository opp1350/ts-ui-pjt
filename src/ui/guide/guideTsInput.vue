<template>
    <div>
        <h2 class="guide-title">
            <a href="javascript:void(0);">tsinput 가이드</a></h2>
        <div>
            <label for="myCustomInput">접두, 접미사가 붙은 input</label>
            <ts-input-group prefix suffix>
                <template v-slot:prefix>
                    <span>검색</span>
                </template>
                <ts-input
                    placeholder="플레이스홀더 입력"
                    v-model="inputData1"
                    id="myCustomInput"
                />
                <template v-slot:suffix>
                    <button type="button">
                        <i class="pi pi-search" />
                    </button>
                </template>
            </ts-input-group>
        </div>
        <div>
            <label for="myInput">disabled</label>
            <ts-input
                placeholder="플레이스홀더 입력"
                v-model="inputData1"
                disabled
                id="myInput"
            />
        </div>
        <div>
            <label for="myInput1">readonly</label>
            <ts-input
                v-model="inputDataNum"
                id="myInput1"
                readonly
                type="number"
            />
        </div>
    </div>
</template>
<script>

export default {
    name: 'GuideTsInput',
    components: {
    },
    data() {
        return {
            inputData1: '데이터바인딩',
            inputDataNum: 'ddd'
        }
    },
    
}
</script>