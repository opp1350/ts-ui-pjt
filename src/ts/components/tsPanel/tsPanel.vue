<template>
  <Panel v-model="value" :header="header" :toggleable="toggleable" :collapsed="collapsed" />
</template>
 
<script>
import Panel from 'primevue/panel';
export default {
  name: 'tsPanel',
  components: {
    Panel
  },
  props: {
    header: String,
    toggleable: Boolean,
    collapsed: Boolean
  },
  data() {
    return {
      value: null
    }
  }
}
</script>