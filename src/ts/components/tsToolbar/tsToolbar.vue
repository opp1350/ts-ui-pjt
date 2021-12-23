<template>
    <div class="p-toolbar p-component" role="toolbar">
        <div class="p-toolbar-group-left">
             <slot name="start"></slot>
        </div>
        <div class="p-toolbar-group-right">
             <slot name="end"></slot>
        </div>
    </div>
</template>
 
<script>
// import Toolbar from 'primevue/toolbar';
export default {
  name: 'tsToolbar',
  components: {
    // Toolbar
  },
  props: {
  },
  data() {
      return {
      }
  }
}
</script>