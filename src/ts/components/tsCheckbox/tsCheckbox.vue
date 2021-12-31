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
  <label :for="id" class="ts-checkbox-label">{{label}}</label>
</template>

<script>
import Checkbox from 'primevue/checkbox';
export default {
  name: 'tsCheckbox',
  components: {
      Checkbox
  },
  data() {
      return {
          checked: false
      }
  },
  props: {
    value: null,
    modelValue: null,
    label: null,
    id: null,
    binary: Boolean,
    class: null,
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