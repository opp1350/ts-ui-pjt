<template>
  <Button :label="label" :icon="icon" :iconPos="iconPos" :badge="badge" :badgeClass="badgeClass" :loading="loading" :loadingIcon="loadingIcon"
  :class="tsButtonClass"
  />
</template>

<script>
import Button from 'primevue/button';
import { computed } from '@vue/reactivity';
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
    },
    size: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
  },
  setup (props) {
    const tsButtonClass = computed(() => {
      return {
        'ts-button': true,
        'p-button-rounded': props.rounded,
        'p-button-outlined': props.outlined,
        'p-button-raised': props.raised,
        'p-button-text': props.text,
        'p-button-link': props.link,
        'p-button-sm': props.size == 'small',
        'p-button-lg': props.size == 'large',
        'p-button-secondary': props.color == 'secondary',
        'p-button-success': props.color == 'success',
        'p-button-info': props.color == 'info',
        'p-button-warning': props.color == 'warning',
        'p-button-danger': props.color == 'danger',
        'p-button-primary-dark': props.color == 'primary-dark',
        'p-button-plain': props.color == 'gray',
      }
    })
    return {
      tsButtonClass
    }
  }
}
</script>