<template>
  <SelectButton :modelValue="modelValue" :options="options" :optionLabel="optionLabel" :optionValue="optionValue" :optionDisabled="optionDisabled" :multiple="multiple" 
  :disabled="disabled" :dataKey="dataKey" :ariaLabelledBy="ariaLabelledBy"
  @update:modelValue="$emit('update:modelValue', $event)"
  @focus="$emit('focus', $event)"
  @blur="$emit('blur', $event)"
  @change="$emit('change', $event)"
  class="ts-select-button" />
</template>
 
<script>
import SelectButton from 'primevue/selectbutton';
export default {
  name: 'tsSelectButton',
  emits: ['update:modelValue', 'focus', 'blur', 'change'],
  components: {
    SelectButton
  },
  data() {
      return {
      }
  },
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    multiple: Boolean,
    disabled: Boolean,
    dataKey: null,
    ariaLabelledBy: null
  }
}
</script>