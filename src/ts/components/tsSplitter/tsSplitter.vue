<template>
  <Splitter :layout="layout" :gutterSize="gutterSize" :stateKey="stateKey" :stateStorage="stateStorage" />
</template>
 
<script>
import Splitter from 'primevue/splitter';
export default {
  name: 'tsSplitter',
  components: {
    Splitter
  },
  props: {
    layout: {
      type: String,
      default: 'horizontal'
    },
    gutterSize: {
      type: Number,
      default: 4
    },
    stateKey: {
      type: String,
      default: null
    },
    stateStorage: {
      type: String,
      default: 'session'
    }
  },
  data() {
      return {
      }
  }
}
</script>