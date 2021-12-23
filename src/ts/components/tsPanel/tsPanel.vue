<template>
  <Panel v-model="value" :header="header" :toggleable="toggleable" :collapsed="collapsed"
  @update:collapsed="$emit('update:collapsed', $event)"
  @toggle="$emit('toggle', $event)"
  class="ts-panel" />
</template>
 
<script>
import Panel from 'primevue/panel';
export default {
  name: 'tsPanel',
  emits: ['update:collapsed', 'toggle'],
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