<template>
  <Divider :align="align" :layout="layout" :type="type"
  class="ts-divider" />
</template>
 
<script>
import Divider from 'primevue/divider';
export default {
  name: 'tsDivider',
  components: {
    Divider
  },
  data() {
      return {
      }
  },
  props: {
    align: {
      type: String,
      default: null
    },
    layout: {
      type: String,
      default: 'horizontal'
    },
    type: {
      type: String,
      default: 'solid'
    }
  }
}
</script>