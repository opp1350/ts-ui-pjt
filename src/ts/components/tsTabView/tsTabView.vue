<template>
  <TabView :activeIndex="activeIndex" :lazy="lazy" :scrollable="scrollable" />
</template>
 
<script>
import TabView from 'primevue/tabview';
export default {
  name: 'tsTabView',
  components: {
    TabView
  },
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    lazy: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  data() {
      return {
      }
  }
}
</script>