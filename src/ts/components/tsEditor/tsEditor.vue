<template>
  <Editor :modelValue="modelValue" :placeholder="placeholder" :readonly="readonly" :formats="formats" :editorStyle="editorStyle" />
</template>
 
<script>
import Editor from 'primevue/editor';
export default {
  name: 'tsEditor',
  components: {
    Editor
  },
  data() {
      return {
      }
  },
  props: {
    modelValue: String,
    placeholder: String,
    readonly: Boolean,
    formats: Array,
    editorStyle: null
  }
}
</script>