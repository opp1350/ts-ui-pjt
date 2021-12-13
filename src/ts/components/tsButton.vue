<template>
  <div>
    <Button class="button button-close" label="button"></Button>
  </div>
</template>
 
<script>

import Button from 'primevue/button';

export default {
  name: 'tsButton',
  components: {
      Button
  }
}
</script>
 
<style scoped>
.button {
  border: none;
  border-radius: 5px;
}

.button-close {
  background-color: red;
}
</style>