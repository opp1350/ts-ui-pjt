<template>
  <TreeSelect :modelValue="modelValue" :options="options" :scrollHeight="scrollHeight" :placeholder="placeholder" :disabled="disabled" :tabindex="tabindex" :inputId="inputId"
  :ariaLabelledBy="ariaLabelledBy" :selectionMode="selectionMode" :panelClass="panelClass" :appendTo="appendTo" :emptyMessage="emptyMessage" :display="display" :metaKeySelection="metaKeySelection" />
</template>
 
<script>
import TreeSelect from 'primevue/treeselect';
export default {
  name: 'tsTreeSelect',
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