<template>
    <div>
        <h2 class="guide-title">tsinput 가이드</h2>
        <div>
            <label for="myCustomInput">접두, 접미사가 붙은 input</label>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-search" />
                </span>
                <ts-input
                    placeholder="플레이스홀더 입력"
                    v-model="inputData1"
                    id="myCustomInput"
                />
                <span class="p-inputgroup-addon">
                    <i class="pi pi-spin pi-spinner" />
                </span>
            </div>
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
                type="password"
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