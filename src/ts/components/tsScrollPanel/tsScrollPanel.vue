<template>
  <ScrollPanel v-model="value"/>
</template>
 
<script>
import ScrollPanel from 'primevue/scrollpanel';
export default {
  name: 'tsScrollPanel',
  components: {
    ScrollPanel
  },
  props: {

  },
  data() {
      return {
        value: null
      }
  }
}
</script>