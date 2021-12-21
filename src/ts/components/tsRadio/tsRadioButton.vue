<template>
    <RadioButton :value="value" :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        @click="$emit('click', $event)"
        @change="$emit('change', $event)"
    />
</template>

<script>
import RadioButton from 'primevue/radiobutton';

export default {
    name: 'tsRadioButton',
    components: {
        RadioButton
    },
    emits: ['click', 'change', 'update:modelValue'],
    props: {
        value: null,
        modelValue: null,
        class: null,
        style: null
    },
    setup() {
        
    },
}
</script>
