<template>
  <DeferredContent
  @load="$emit('load', $event)"
  class="ts-deferred-content" />
</template>
 
<script>
import DeferredContent from 'primevue/deferredcontent';
export default {
  name: 'tsDeferredContent',
  emits: ['load'],
  components: {
    DeferredContent
  },
  data() {
      return {
      }
  },
  props: {
  }
}
</script>