<template>
  <Checkbox :value="value" :modelValue="modelValue" :binary="binary" :disabled="disabled" :trueValue="trueValue" :falseValue="falseValue"
    @click="$emit('click', $event)"
    @update:modelValue="$emit('update:modelValue', $event)"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
    class="ts-checkbox"
    :id="id"
    :name="name"
  />
  <label :for="id" class="ts-checkbox-label">{{label}}</label>
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
    id: null,
    label: null,
    name: null,
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