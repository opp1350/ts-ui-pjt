<template>
  <TabPanel :header="header" :disabled="disabled" />
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