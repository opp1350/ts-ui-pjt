<template>
  <SplitterPanel :size="size" :minSize="minSize" />
</template>
 
<script>
import SplitterPanel from 'primevue/splitterpanel';
export default {
  name: 'tsSplitterPanel',
  components: {
    SplitterPanel
  },
  props: {
    size: {
      type: Number,
      default: null
    },
    minSize: {
      type: Number,
      default: null
    }
  },
  data() {
      return {
      }
  }
}
</script>