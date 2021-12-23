<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsRadio 가이드</a></h2>
        <div>
            <label for="radioButtonInput1">basic </label>
            <ts-radio v-model="radioButton_val1" value="0"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsRadio',
    components: {
    },
    data() {
        return {
            radioButton_val1: '',
        }
    }
}
</script>