<template>
  <SpeedDial :model="model" :visible="visible" :direction="direction" :transitionDelay="transitionDelay" :type="type" :radius="radius" :mask="mask" :disabled="disabled"
  :hideOnClickOutside="hideOnClickOutside" :buttonClass="buttonClass" :maskStyle="maskStyle" :maskClass="maskClass" :showIcon="showIcon" :hideIcon="hideIcon" 
  :rotateAnimation="rotateAnimation" :tooltipOptions="tooltipOptions" :style="style"
  @click="$emit('click', $event)"
  @show="$emit('show', $event)"
  @hide="$emit('hide', $event)"
  class="ts-speed-dial" />
</template>
 
<script>
import SpeedDial from 'primevue/speeddial';
export default {
  name: 'tsSpeedDial',
  emits: ['click', 'show', 'hide'],
  components: {
    SpeedDial
  },
  props: {
    model: null,
    visible: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'up'
    },
    transitionDelay: {
      type: Number,
      default: 30
    },
    type: {
      type: String,
      default: 'linear'
    },
    radius: {
      type: Number,
      default: 0
    },
    mask: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    },
    buttonClass: null,
    maskStyle: null,
    maskClass: null,
    showIcon: {
      type: String,
      default: 'pi pi-plus'
    },
    hideIcon: null,
    rotateAnimation: {
      type: Boolean,
      default: true
    },
    tooltipOptions: null,
    style: null,
    class: null
  }
}
</script>