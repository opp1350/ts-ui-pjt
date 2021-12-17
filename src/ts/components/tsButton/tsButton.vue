<template>
  <Button class="button button-close" :label="label" :icon="icon" :iconPos="iconPos" :badge="badge" :badgeClass="badgeClass" :loading="loading" :loadingIcon="loadingIcon"></Button>
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
  }
}
</script>