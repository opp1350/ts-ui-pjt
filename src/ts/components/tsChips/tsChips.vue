<template>
  <Chips v-model="value" :modelValue="modelValue" :max="max" :separator="separator" :addOnBlur="addOnBlur" :allowDuplicate="allowDuplicate" />
</template>
 
<script>
import Chips from 'primevue/chips';
export default {
  name: 'tsChips',
  components: {
    Chips
  },
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    separator: {
      type: String,
      default: null
    },
    addOnBlur: {
      type: Boolean,
      default: null
    },
    allowDuplicate: {
      type: Boolean,
      default: true
    },
    class: null,
    style: null
  },
  data() {
      return{
        value: null
      }
  }
}
</script>