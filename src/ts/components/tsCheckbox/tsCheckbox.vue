<template>
  <Checkbox 
    :id="id"
    :name="name"
    :value="value" :modelValue="modelValue" :binary="binary" :disabled="disabled" :trueValue="trueValue" :falseValue="falseValue"
    @click="$emit('click', $event)"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
    class="ts-checkbox"
  />
  <label v-if="label !== undefined" :for="id" class="ts-checkbox-label" :class="{hidden : hideLabel}">{{label}}</label>
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
    label: null,
    hideLabel: Boolean,
    id: {
        type: null,
        required: true
    },
    name: null,
    binary: Boolean,
    style: null,
    trueValue: {
        type: null,
        default: true
    },
    falseValue: {
        type: null,
        default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>