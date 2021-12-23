<template>
  <TreeSelect :modelValue="modelValue" :options="options" :scrollHeight="scrollHeight" :placeholder="placeholder" :disabled="disabled" :tabindex="tabindex" :inputId="inputId"
  :ariaLabelledBy="ariaLabelledBy" :selectionMode="selectionMode" :panelClass="panelClass" :appendTo="appendTo" :emptyMessage="emptyMessage" :display="display" :metaKeySelection="metaKeySelection"
  @update:modelValue="$emit('update:modelValue', $event)"
  @before-show="$emit('before-show', $event)"
  @before-hide="$emit('before-hide', $event)"
  @change="$emit('change', $event)"
  @show="$emit('show', $event)"
  @hide="$emit('hide', $event)"
  @node-select="$emit('node-select', $event)"
  @node-unselect="$emit('node-unselect', $event)"
  @node-expand="$emit('node-expand', $event)"
  @node-collapse="$emit('node-collapse', $event)"
  class="ts-tree-select" />
</template>
 
<script>
import TreeSelect from 'primevue/treeselect';
export default {
  name: 'tsTreeSelect',
  emits: ['update:modelValue', 'before-show', 'before-hide', 'change', 'show', 'hide', 'node-select', 'node-unselect', 'node-expand', 'node-collapse'],
  components: {
    TreeSelect
  },
  data() {
      return {
      }
  },
  props: {
    modelValue: null,
    options: Array,
    scrollHeight: {
      type: String,
      default: '400px'
    },
    placeholder: String,
    disabled: Boolean,
    tabindex: String,
    inputId: String,
    ariaLabelledBy: null,
    selectionMode: {
      type: String,
      default: 'single'
    },
    panelClass: {
      type: String,
      default: null
    },
    appendTo: {
      type: String,
      default: 'body'
    },
    emptyMessage: {
      type: String,
      default: null
    },
    display: {
      type: String,
      default: 'comma'
    },
    metaKeySelection: {
      type: Boolean,
      default: true
    }
  }
}
</script>