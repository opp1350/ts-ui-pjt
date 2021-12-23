<template>
  <Checkbox v-model="checked" :value="value" :modelValue="modelValue" :binary="binary" :disabled="disabled" :trueValue="trueValue" :falseValue="falseValue" />
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
    }
  }
}
</script>