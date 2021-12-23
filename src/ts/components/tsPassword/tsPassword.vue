<template>
  <Password v-model="value" :modelValue="modelValue" :promptLabel="promptLabel" :mediumRegex="mediumRegex" :strongRegex="strongRegex" :weakLabel="weakLabel" :mediumLabel="mediumLabel"
  :strongLabel="strongLabel" :feedback="feedback" :appendTo="appendTo" :toggleMask="toggleMask" :hideIcon="hideIcon" :showIcon="showIcon" :inputClass="inputClass"
  :inputStyle="inputStyle" :panelClass="panelClass"
  @update:modelValue="$emit('update:modelValue', $event)"
  class="password" />
</template>
 
<script>
import Password from 'primevue/password';
export default {
  name: 'tsPassword',
  emits: ['update:modelValue'],
  components: {
    Password
  },
  data() {
      return {
        value : null
      }
  },
  props: {
    modelValue: String,
    promptLabel: {
      type: String,
      default: null
    },
    mediumRegex: {
      type: String,
      default: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})' // eslint-disable-line
    },
    strongRegex: {
      type: String,
      default: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})' // eslint-disable-line
    },
    weakLabel: {
      type: String,
      default: null
    },
    mediumLabel: {
      type: String,
      default: null
    },
    strongLabel: {
      type: String,
      default: null
    },
    feedback: {
      type: Boolean,
      default: true
    },
    appendTo: {
      type: String,
      default: 'body'
    },
    toggleMask: {
      type: Boolean,
      default: false
    },
    hideIcon: {
      type: String,
      default: 'pi pi-eye-slash'
    },
    showIcon: {
      type: String,
      default: 'pi pi-eye'
    },
    inputClass: String,
    inputStyle: null,
    style: null,
    class: String,
    panelClass: String
  }
}
</script>