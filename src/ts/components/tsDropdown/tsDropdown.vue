<template>
  <Dropdown :modelValue="modelValue" :options="options" :optionLabel="optionLabel" :optionValue="optionValue" :optionDisabled="optionDisabled" :optionGroupLabel="optionGroupLabel"
  :optionGroupChildren="optionGroupChildren" :scrollHeight="scrollHeight" :filter="filter" :filterPlaceholder="filterPlaceholder" :filterLocale="filterLocale" 
  :filterMatchMode="filterMatchMode" :filterFields="filterFields" :editable="editable" :placeholder="placeholder" :disabled="disabled" :dataKey="dataKey" :showClear="showClear"
  :inputId="inputId" :tabindex="tabindex" :ariaLabelledBy="ariaLabelledBy" :appendTo="appendTo" :emptyFilterMessage="emptyFilterMessage" :emptyMessage="emptyMessage"
  :panelClass="panelClass" :loading="loading" :loadingIcon="loadingIcon" :virtualScrollerOptions="virtualScrollerOptions"
  @update:modelValue="$emit('update:modelValue', $event)"
  @before-show="$emit('before-show', $event)"
  @before-hide="$emit('before-hide', $event)"
  @show="$emit('show', $event)"
  @hide="$emit('hide', $event)"
  @change="$emit('change', $event)"
  @filter="$emit('filter', $event)"
  @focus="$emit('focus', $event)"
  @blur="$emit('blur', $event)"
  class="ts-dropdown" />
</template>
 
<script>
import Dropdown from 'primevue/dropdown';
export default {
  name: 'tsDropdown',
  emits: ['update:modelValue', 'before-show', 'before-hide', 'show', 'hide', 'change', 'filter', 'focus', 'blur'],
  components: {
    Dropdown
  },
  data() {
      return {
      }
  },
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      default: '200px'
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
        type: String,
        default: 'contains'
    },
    filterFields: {
        type: Array,
        default: null
    },
    editable: Boolean,
    placeholder: String,
    disabled: Boolean,
    dataKey: null,
    showClear: Boolean,
    inputId: String,
    tabindex: String,
    ariaLabelledBy: null,
    appendTo: {
        type: String,
        default: 'body'
    },
    emptyFilterMessage: {
        type: String,
        default: null
    },
    emptyMessage: {
        type: String,
        default: null
    },
    panelClass: null,
    loading: {
        type: Boolean,
        default: false
    },
    loadingIcon: {
        type: String,
        default: 'pi pi-spinner pi-spin'
    },
    virtualScrollerOptions: {
        type: Object,
        default: null
    }
  },
}
</script>