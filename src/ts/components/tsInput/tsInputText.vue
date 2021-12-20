<template>
    <InputText
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>
<script>
import InputText from 'primevue/inputtext';
export default {
    name: 'tsInputText',
    components: {
        InputText
    },
    props: {
        modelValue: {
            type: String,
            default: ""
        }
    },
    emits: ["update:modelValue"],
    setup() {
        
    },
}
</script>
