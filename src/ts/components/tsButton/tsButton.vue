<template>
  <Button class="button button-close" :label="label"></Button>
</template>
 
<script>
import Button from 'primevue/button';
export default {
  name: 'tsButton',
  components: {
      Button
  },
  props: {
    label: String
  },
  setup () {
  }
}
</script>