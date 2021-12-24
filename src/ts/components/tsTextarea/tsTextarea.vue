<template>
  <Textarea :modelValue="modelValue" :autoResize="autoResize"
  @update:modelValue="$emit('update:modelValue', $event)"
  class="ts-textarea" />
</template>
 
<script>
import Textarea from 'primevue/textarea';
export default {
  name: 'tsTextarea',
  emits: ['update:modelValue'],
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