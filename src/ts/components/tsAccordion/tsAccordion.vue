<template>
  <Accordion :multiple="multiple" :activeIndex="activeIndex" :lazy="lazy" 
  @tab-close="$emit('tab-close', $event)"
  @tab-open="$emit('tab-open', $event)"
  @update:activeIndex="$emit('update:activeIndex', $event)"
  class="ts-accordion" />
</template>
 
<script>
import Accordion from 'primevue/accordion';
export default {
  name: 'tsAccordion',
  emits: ['tab-close', 'tab-open', 'update:activeIndex'],
  components: {
    Accordion
  },
  data() {
      return {
      }
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    activeIndex: {
      type: [Number,Array],
      default: null
    },
    lazy: {
      type: Boolean,
      default: false
    }
  }
}
</script>