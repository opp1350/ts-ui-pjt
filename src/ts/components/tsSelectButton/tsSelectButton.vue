<template>
  <SelectButton :modelValue="modelValue" :options="options" :optionLabel="optionLabel" :optionValue="optionValue" :optionDisabled="optionDisabled" :multiple="multiple" 
  :disabled="disabled" :dataKey="dataKey" :ariaLabelledBy="ariaLabelledBy" />
</template>
 
<script>
import SelectButton from 'primevue/selectbutton';
export default {
  name: 'tsSelectButton',
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