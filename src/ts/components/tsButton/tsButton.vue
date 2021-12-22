<template>
  <Button 
    :label="label"
    class="ts-button"
  />
</template>
 
<script>
import Button from 'primevue/button';
export default {
  name: 'tsButton',
  components: {
      Button
  },
  props: {
    label: {
            type: String
        },
        icon: {
            type: String
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        badge: {
            type: String
        },
        badgeClass: {
            type: String,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner pi-spin'
        }
  },
  setup () {
  }
}
</script>