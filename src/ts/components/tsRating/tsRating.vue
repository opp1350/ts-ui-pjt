<template>
  <Rating :modelValue="modelValue" :disabled="disabled" :readonly="readonly" :stars="stars" :cancel="cancel"
  @update:modelValue="$emit('update:modelValue', $event)"
  @change="$emit('change', $event)"
  class="ts-rating" />
</template>
 
<script>
import Rating from 'primevue/rating';
export default {
  name: 'tsRating',
  emits: ['update:modelValue', 'change'],
  components: {
    Rating
  },
  data() {
      return {
      }
  },
  props: {
    modelValue: {
        type: Number,
        default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    stars: {
        type: Number,
        default: 5
    },
    cancel: {
        type: Boolean,
        default: true
    }
  }
}
</script>