<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsListbox 가이드</a></h2>
        <div>
            <label for="listboxInput1">basic </label>
            <ts-listbox v-model="listbox_val1" :options="listbox_options" optionLabel="name"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsListbox',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
            listbox_val1: '',
            listbox_options: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'}
            ]
        }
    },
    methods: {
    }
}
</script>