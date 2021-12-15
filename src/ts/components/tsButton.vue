<template>
  <div>
    <Button class="button button-close" :label="labelTxt"></Button>
  </div>
</template>
 
<script>
import Button from 'primevue/button';
import { ref } from 'vue'
export default {
  name: 'tsButton',
  components: {
      Button
  },
  props: {
    label: String
  },
  setup (props) {
    const labelTxt = ref(props.label)
    return {
      labelTxt
    }
  }
}
</script>