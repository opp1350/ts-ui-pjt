<template>
  <Button :label="label" :icon="icon" :iconPos="iconPos" :badge="badge" :badgeClass="badgeClass" :loading="loading" :loadingIcon="loadingIcon"
    class="ts-button"
    :class="[{'p-button-rounded' : rounded }, {'p-button-outlined' : outlined }, {'p-button-raised' : raised }, {'p-button-text' : text }, {'p-button-raised' : raised }, {'p-button-link' : link }]"
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
    },
    rounded: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>