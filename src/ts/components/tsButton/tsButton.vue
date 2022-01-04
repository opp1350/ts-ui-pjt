<template>
  <Button :label="label" :icon="icon" :iconPos="iconPos" :badge="badge" :badgeClass="badgeClass" :loading="loading" :loadingIcon="loadingIcon"
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
        type: String,
        default: null
    },
    icon: {
        type: String,
        default: null
    },
    iconPos: {
        type: String,
        default: 'left'
    },
    badge: {
        type: String,
        default: null
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