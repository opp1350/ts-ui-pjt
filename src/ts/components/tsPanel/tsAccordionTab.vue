<template>
    <!-- <slot></slot> -->
    <AccordionTab />
</template>
 
<script>
import AccordionTab from 'primevue/accordiontab';
export default {
  name: 'tsAccordionTab',
  components: {
    AccordionTab
  },
  data() {
      return {
      }
  },
  props: {
    header: null,
    disabled: Boolean
  }
}
</script>