<template>
  <CascadeSelect v-model="value" :modelValue="modelValue" :options="options" :optionLabel="optionLabel" :optionValue="optionValue" :optionGroupLabel="optionGroupLabel"
  :optionGroupChildren="optionGroupChildren" :placeholder="placeholder" :disabled="disabled" :dataKey="dataKey" :inputId="inputId" :tabindex="tabindex" :ariaLabelledBy="ariaLabelledBy"
  :appendTo="appendTo" :panelClass="panelClass" :loading="loading" :loadingIcon="loadingIcon" 
  @update:modelValue="$emit('update:modelValue', $event)"
  @change="$emit('change', $event)"
  @group-change="$emit('group-change', $event)"
  @before-show="$emit('before-show', $event)"
  @before-hide="$emit('before-hide', $event)"
  @hide="$emit('hide', $event)"
  @show="$emit('show', $event)"
  class="ts-cascade-select" />
</template>
 
<script>
import CascadeSelect from 'primevue/cascadeselect';
export default {
  name: 'tsCascadeSelect',
  emits: ['update:modelValue','change','group-change', 'before-show','before-hide','hide','show'],
  components: {
    CascadeSelect
  },
  data() {
    return {
      value: null
    }
  },
  props: {
    modelValue: null,
    options: Array,
    optionLabel: String,
    optionValue: String,
    optionGroupLabel: String,
    optionGroupChildren: Array,
    placeholder: String,
    disabled: Boolean,
    dataKey: null,
    inputId: String,
    tabindex: String,
    ariaLabelledBy: null,
    appendTo: {
        type: String,
        default: 'body'
    },
    panelClass: null,
    loading: {
        type: Boolean,
        default: false
    },
    loadingIcon: {
        type: String,
        default: 'pi pi-spinner pi-spin'
    }
  }
}
</script>