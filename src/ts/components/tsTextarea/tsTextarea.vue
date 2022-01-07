<template>
  <Textarea :modelValue="modelValue" :autoResize="autoResize"
  @update:modelValue="$emit('update:modelValue', $event)"
  class="ts-textarea" />
  <!-- <template v-if="maxByte > 0">
    <p>{{ `(${getByte}/${maxByte}) byte` }}</p>
  </template>
  <template v-else>
    <p>{{ `${getByte} byte` }}</p>
  </template> -->
</template>
 
<script>
import Textarea from 'primevue/textarea';
export default {
  name: 'tsTextarea',
  emits: ['update:modelValue'],
  components: {
    Textarea
  },
  data() {
    return {
    }
  },
  props: {
    modelValue: null,
    autoResize: Boolean,
    maxByte: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currByte() {
      let str = this.modelValue
      let str_len = str.length
      
      let rbyte = 0
      let one_char = ''
      for(let i=0; i < str_len; i++) {
          one_char = str.charAt(i)
          if (escape(one_char).length > 4) {
              //한글2Byte
              rbyte += 2
          } else {
              //영문 등 나머지 1Byte
              rbyte++
          }
      }
      return rbyte
    },
    getByte() {
      let str = this.modelValue
      return str
      .split('') 
      .map(s => s.charCodeAt(0))
      .reduce((prev, c) => (prev + ((c === 10) ? 2 : ((c >> 7) ? 2 : 1))), 0)
    }
  }
}
</script>