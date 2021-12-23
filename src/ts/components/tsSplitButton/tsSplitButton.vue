<template>
  <SplitButton :label="label" :icon="icon" :model="model" :autoZIndex="autoZIndex" :baseZIndex="baseZIndex" :appendTo="appendTo" :style="style"
  class="ts-split-button" />
</template>
 
<script>
import SplitButton from 'primevue/splitbutton';
export default {
  name: 'tsSplitButton',
  components: {
    SplitButton
  },
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    model: {
      type: Array,
      default: null
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    appendTo: {
      type: String,
      default: 'body'
    },
    class: null,
    style: null
  }
}
</script>