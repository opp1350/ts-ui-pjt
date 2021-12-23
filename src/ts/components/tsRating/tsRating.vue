<template>
  <Rating v-model="value" :modelValue="modelValue" :disabled="disabled" :readonly="readonly" :stars="stars" :cancel="cancel" />
</template>
 
<script>
import Rating from 'primevue/rating';
export default {
  name: 'tsRating',
  components: {
    Rating
  },
  data() {
      return {
        value: 0
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