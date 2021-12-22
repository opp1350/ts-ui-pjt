<template>
  <Accordion :multiple="multiple" :activeIndex="activeIndex" :lazy="lazy" />
</template>
 
<script>
import Accordion from 'primevue/accordion';
export default {
  name: 'tsAccordion',
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