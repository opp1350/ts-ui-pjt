<template>
  <Textarea :modelValue="modelValue" :autoResize="autoResize" />
</template>
 
<script>
import Textarea from 'primevue/textarea';
export default {
  name: 'tsTextarea',
  components: {
    Textarea
  },
  data() {
    return {
    }
  },
  props: {
    modelValue: null,
    autoResize: Boolean
  }
}
</script>