<template>
  <Fieldset :legend="legend" :toggleable="toggleable" :collapsed="collapsed" />
</template>
 
<script>
import Fieldset from 'primevue/fieldset';
export default {
  name: 'tsFieldset',
  components: {
    Fieldset
  },
  data() {
      return {
      }
  },
  props: {
    legend: String,
    toggleable: Boolean,
    collapsed: Boolean
  },
}
</script>