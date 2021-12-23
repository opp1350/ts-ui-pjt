<template>
  <ColorPicker :modelValue="modelValue" :defaultColor="defaultColor" :inline="inline" :format="format" :disabled="disabled" :tabindex="tabindex" :autoZIndex="autoZIndex"
  :baseZIndex="baseZIndex" :ariaLabelledBy="ariaLabelledBy" :appendTo="appendTo" :panelClass="panelClass"
  @update:modelValue="$emit('update:modelValue', $event)"
  @change="$emit('change', $event)"
  @show="$emit('show', $event)"
  @hide="$emit('hide', $event)"
  class="ts-colorpicker" />
</template>
 
<script>
import ColorPicker from 'primevue/colorpicker';
export default {
  name: 'tsColorPicker',
  emits: ['update:modelValue', 'change', 'show', 'hide'],
  components: {
    ColorPicker
  },
  data() {
      return {
      }
  },
  props: {
    modelValue: {
      type: null,
      default: null
    },
    defaultColor: {
      type: null,
      default: 'ff0000'
    },
    inline: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'hex'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: String,
      default: null
    },
    autoZIndex: {
      type: Boolean,
      default: true
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    ariaLabelledBy: {
      type: String,
      default: null
    },
    appendTo: {
      type: String,
      default: 'body'
    },
    panelClass: null
  }
}
</script>