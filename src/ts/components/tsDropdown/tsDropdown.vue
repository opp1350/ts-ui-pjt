<template>
  <Dropdown :modelValue="modelValue" :options="options" :optionLabel="optionLabel" :optionValue="optionValue" :optionDisabled="optionDisabled" :optionGroupLabel="optionGroupLabel"
  :optionGroupChildren="optionGroupChildren" :scrollHeight="scrollHeight" :filter="filter" :filterPlaceholder="filterPlaceholder" :filterLocale="filterLocale" 
  :filterMatchMode="filterMatchMode" :filterFields="filterFields" :editable="editable" :placeholder="placeholder" :disabled="disabled" :dataKey="dataKey" :showClear="showClear"
  :inputId="inputId" :tabindex="tabindex" :ariaLabelledBy="ariaLabelledBy" :appendTo="appendTo" :emptyFilterMessage="emptyFilterMessage" :emptyMessage="emptyMessage"
  :panelClass="panelClass" :loading="loading" :loadingIcon="loadingIcon" :virtualScrollerOptions="virtualScrollerOptions" />
</template>
 
<script>
import Dropdown from 'primevue/dropdown';
export default {
  name: 'tsDropdown',
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