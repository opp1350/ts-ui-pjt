<template>
  <TriStateCheckbox :modelValue="modelValue" :style="style" />
</template>
 
<script>
import TriStateCheckbox from 'primevue/tristatecheckbox';
export default {
  name: 'tsTriStateCheckbox',
  components: {
    TriStateCheckbox
  },
  data() {
      return {
      }
  },
  props: {
    modelValue: null,
    class: null,
    style: null
  }
}
</script>