<template>
    <InputText
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        class="ts-input-text"
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
        modelValue: null
    },
    emits: ["update:modelValue"],
    setup() {
        
    },
}
</script>
