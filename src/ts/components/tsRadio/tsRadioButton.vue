<template>
    <RadioButton
        :value="value"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        @click="$emit('click', $event)"
        @change="$emit('change', $event)"
    />
    <label>{{value}}</label>
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
        id: null,
        name: null,
        value: null,
        modelValue: null,
        class: null,
        style: null,
        disabled: {
            type: Boolean,
            default: false
        },
    },
    setup() {
        
    },
}
</script>
