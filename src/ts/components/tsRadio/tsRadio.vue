<template>
  <RadioButton v-model="val" :value="value" :modelValue="modelValue" />
</template>
 
<script>
import RadioButton from 'primevue/radiobutton';
export default {
  name: 'tsRadioButton',
  components: {
    RadioButton
  },
  data() {
      return {
        val: null
      }
  },
  props: {
    value: null,
    modelValue: null,
    class: null,
    style: null
  }
}
</script>