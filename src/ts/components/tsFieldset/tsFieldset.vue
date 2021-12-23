<template>
  <Fieldset v-model="value" :legend="legend" :toggleable="toggleable" :collapsed="collapsed"
  @update:collapsed="$emit('update:collapsed', $event)"
  @toggle="$emit('toggle', $event)"
  class="ts-fieldset" />
</template>
 
<script>
import Fieldset from 'primevue/fieldset';
export default {
  name: 'tsFieldset',
  emits: ['update:collapsed', 'toggle'],
  components: {
    Fieldset
  },
  data() {
      return {
        value: null
      }
  },
  props: {
    legend: String,
    toggleable: Boolean,
    collapsed: Boolean
  },
}
</script>