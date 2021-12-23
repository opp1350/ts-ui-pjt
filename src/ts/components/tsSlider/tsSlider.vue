<template>
  <Slider v-model="value" :modelValue="modelValue" :min="min" :max="max" :orientation="orientation" :step="step" :range="range" :disabled="disabled" :ariaLabelledBy="ariaLabelledBy"
  @update:modelValue="$emit('update:modelValue', $event)"
  @change="$emit('change', $event)"
  @slideend="$emit('slideend', $event)"
  class="ts-slider" />
</template>
 
<script>
import Slider from 'primevue/slider';
export default {
  name: 'tsSlider',
  emits: ['update:modelValue', 'change', 'slideend'],
  components: {
    Slider
  },
  data() {
      return {
        value: null
      }
  },
  props: {
    modelValue: [Number,Array],
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    orientation: {
      type: String,
      default: 'horizontal'
    },
    step: {
      type: Number,
      default: null
    },
    range: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ariaLabelledBy: {
      type: String,
     default: null
    }
  }
}
</script>