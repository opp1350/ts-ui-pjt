<template>
    <InputText
        class="ts-input"
        :disabled="disabled"
        :placeholder="placeholder"
    />
</template>
<script>
import InputText from 'primevue/inputtext';
// import InputMask from 'primevue/inputmask';
// import InputNumber from 'primevue/inputnumber';
export default {
    name: 'tsInput',
    components: {
        InputText
        // InputMask,
        // InputNumber
    },
    props: {
        // inputType: {
        //     type: String,
        //     default: 'text'
        // },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '입력해 주세요'
        }
    }
}
</script>