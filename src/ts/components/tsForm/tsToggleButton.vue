<template>
  <ToggleButton v-model="checked" :modelValue="modelValue" :onIcon="onIcon" :offIcon="offIcon" :onLabel="onLabel" :offLabel="offLabel" :iconPos="iconPos" />
</template>
 
<script>
import ToggleButton from 'primevue/togglebutton';
export default {
  name: 'tsToggleButton',
  components: {
    ToggleButton
  },
  data() {
    return {
      checked: true
    }
  },
  props: {
    modelValue: Boolean,
    onIcon: String,
    offIcon: String,
    onLabel: String,
    offLabel: String,
    iconPos: {
        type: String,
        default: 'left'
    }
  }
}
</script>