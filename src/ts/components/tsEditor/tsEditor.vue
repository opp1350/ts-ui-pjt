<template>
  <Editor :modelValue="modelValue" :placeholder="placeholder" :readonly="readonly" :formats="formats" :editorStyle="editorStyle"
  @update:modelValue="$emit('update:modelValue', $event)"
  @text-change="$emit('text-change', $event)"
  class="ts-editor" />
</template>
 
<script>
import Editor from 'primevue/editor';
export default {
  name: 'tsEditor',
  emits: ['update:modelValue', 'text-change'],
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