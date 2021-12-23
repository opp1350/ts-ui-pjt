<template>
  <TabPanel :header="header" :disabled="disabled"
  class="ts-tab-panel" />
</template>
 
<script>
import TabPanel from 'primevue/tabpanel';
export default {
  name: 'tsTabPanel',
  components: {
    TabPanel
  },
  props: {
    header: null,
    disabled: Boolean
  },
  data() {
    return {
    }
  }
}
</script>