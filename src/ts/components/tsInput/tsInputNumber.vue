<template>
    <InputNumber 
        :modelValue="modelValue" :format="format" :showButtons="showButtons" :buttonLayout="buttonLayout" :incrementButtonClass="incrementButtonClass"
        :decrementButtonClass="decrementButtonClass" :incrementButtonIcon="incrementButtonIcon" :decrementButtonIcon="decrementButtonIcon"
        :locale="locale" :localeMatcher="localeMatcher" :mode="mode" :prefix="prefix" :suffix="suffix" :currency="currency"
        :currencyDisplay="currencyDisplay" :useGrouping="useGrouping" :minFractionDigits="minFractionDigits" :maxFractionDigits="maxFractionDigits"
        :min="min" :max="max" :step="step" :allowEmpty="allowEmpty" :inputStyle="inputStyle" :inputClass="inputClass" :style="style"
        class="ts-input ts-input-number"
        @update:modelValue="$emit('update:modelValue', $event)"
        @input="$emit('input', $event)"
    />
</template>

<script>
import InputNumber from 'primevue/inputnumber';
export default {
    name: 'tsInputNumber',
    components: {
        InputNumber
    },
    emits: ['update:modelValue', 'input'],
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        format: {
            type: Boolean,
            default: true
        },
        showButtons: {
            type: Boolean,
            default: false
        },
        buttonLayout: {
            type: String,
            default: 'stacked'
        },
        incrementButtonClass: {
            type: String,
            default: null,
        },
        decrementButtonClass: {
            type: String,
            default: null,
        },
        incrementButtonIcon: {
            type: String,
            default: 'pi pi-angle-up',
        },
        decrementButtonIcon: {
            type: String,
            default: 'pi pi-angle-down',
        },
        locale: {
            type: String,
            default: undefined
        },
        localeMatcher: {
            type: String,
            default: undefined
        },
        mode: {
            type: String,
            default: 'decimal'
        },
        prefix: {
            type: String,
            default: null
        },
        suffix: {
            type: String,
            default: null
        },
        currency: {
            type: String,
            default: undefined
        },
        currencyDisplay: {
            type: String,
            default: undefined
        },
        useGrouping: {
            type: Boolean,
            default: true
        },
        minFractionDigits: {
            type: Number,
            default: undefined
        },
        maxFractionDigits: {
            type: Number,
            default: undefined
        },
        min: {
            type: Number,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        step: {
            type: Number,
            default: 1
        },
        allowEmpty: {
            type: Boolean,
            default: true
        },
        style: null,
        class: null,
        inputStyle: null,
        inputClass: null
    },
    setup() {
        
    },
}
</script>
