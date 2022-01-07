<template>
  <!-- <Splitter :layout="layout" :gutterSize="gutterSize" :stateKey="stateKey" :stateStorage="stateStorage"
  @resizeend="$emit('resizeend', $event)"
  class="ts-splitter" /> -->
  <Splitter :layout="layout" :gutterSize="gutterSize" :stateKey="stateKey" :stateStorage="stateStorage"
  @resizeend="$emit('resizeend', $event)"
  class="ts-splitter">
    <template v-if="splitPanel !== null">
      <SplitterPanel v-for="(panel, index) in splitPanel" :key="index" :size="panel.size" :minSize="panel.minSize" :class="panel.class">
        <slot name="splitterPanel" :index="index" :items="panel"></slot>
      </SplitterPanel>
    </template>
  </Splitter>
</template>
 
<script>
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

export default {
  name: 'tsSplitter',
  emits: ['resizeend'],
  components: {
    Splitter,
    SplitterPanel
  },
  props: {
    layout: {
      type: String,
      default: 'horizontal'
    },
    gutterSize: {
      type: Number,
      default: 4
    },
    stateKey: {
      type: String,
      default: null
    },
    stateStorage: {
      type: String,
      default: 'session'
    },
    splitPanel: {
      type: Array,
      default: null
    }
  },
  data() {
      return {
      }
  }
}
</script>