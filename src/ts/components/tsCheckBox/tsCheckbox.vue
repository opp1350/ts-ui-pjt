<template>
  <Checkbox :value="value" :modelValue="modelValue" :binary="binary" :disabled="disabled" :trueValue="trueValue" :falseValue="falseValue"
    @click="$emit('click', $event)"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)" />
</template>
 
<script>
import Checkbox from 'primevue/checkbox';
export default {
  name: 'tsCheckbox',
  components: {
      Checkbox
  },
  emits: ['click', 'update:modelValue', 'change', 'input'],
  props: {
    value: null,
    modelValue: null,
    binary: Boolean,
    class: null,
    style: null,
    disabled: {
        type: Boolean,
        default: false
    },
    trueValue: {
        type: null,
        default: true
    },
    falseValue: {
        type: null,
        default: false
    }
  }
}
</script>