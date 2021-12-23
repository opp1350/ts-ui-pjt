<template>
  <Knob v-model="value" :modelValue="modelValue" :size="size" :disabled="disabled" :readonly="readonly" :step="step" :min="min" :max="max" :valueColor="valueColor"
  :rangeColor="rangeColor" :textColor="textColor" :strokeWidth="strokeWidth" :showValue="showValue" :valueTemplate="valueTemplate" />
</template>
 
<script>
import Knob from 'primevue/knob';
export default {
  name: 'tsKnob',
  components: {
    Knob
  },
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    size: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    valueColor: {
      type: String,
      default: 'var(--primary-color, Black)'
    },
    rangeColor: {
      type: String,
      default: 'var(--surface-d, LightGray)'
    },
    textColor: {
      type: String,
      default: 'var(--text-color-secondary, Black)'
    },
    strokeWidth: {
      type: Number,
      default: 14
    },
    showValue: {
      type: Boolean,
      default: true
    },
    valueTemplate: {
      type: String,
      default: "{value}"
    }
  },
  data() {
      return {
        value: 0
      }
  }
}
</script>