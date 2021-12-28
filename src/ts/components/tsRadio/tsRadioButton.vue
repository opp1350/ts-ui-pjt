<template>
    <RadioButton
        :id="id"
        :name="name"
        :value="value"
        :modelValue="modelValue"
        :disabled="disabled"
        @update:modelValue="$emit('update:modelValue', $event)"
        @click="$emit('click', $event)"
        @change="$emit('change', $event)"
        class="ts-radiobutton"
    />
    <label :for="id" class="ts-radiobutton-label">{{ label }}</label>
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
        id: {
            type: String,
            required: true
        },
        name: null,
        value: null,
        label: null,
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
