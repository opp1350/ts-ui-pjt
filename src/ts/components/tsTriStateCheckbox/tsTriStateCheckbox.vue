<template>
  <TriStateCheckbox v-model="value" :modelValue="modelValue" :style="style"
  @click="$emit('click', $event)"
  @update:modelValue="$emit('update:modelValue', $event)"
  @change="$emit('change', $event)"
  class="ts-tri-state-checkbox" />
</template>
 
<script>
import TriStateCheckbox from 'primevue/tristatecheckbox';
export default {
  name: 'tsTriStateCheckbox',
  emits: ['click', 'update:modelValue', 'change'],
  components: {
    TriStateCheckbox
  },
  data() {
      return {
        value: null
      }
  },
  props: {
    modelValue: null,
    class: null,
    style: null
  }
}
</script>