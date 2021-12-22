<template>
  <Listbox :modelValue="modelValue" :options="options" :optionLabel="optionLabel" :optionValue="optionValue" :optionDisabled="optionDisabled" :optionGroupLabel="optionGroupLabel"
  :optionGroupChildren="optionGroupChildren" :listStyle="listStyle" :disabled="disabled" :dataKey="dataKey" :multiple="multiple" :metaKeySelection="metaKeySelection" :filter="filter"
  :filterPlaceholder="filterPlaceholder" :filterLocale="filterLocale" :filterMatchMode="filterMatchMode" :filterFields="filterFields" :emptyFilterMessage="emptyFilterMessage"
  :emptyMessage="emptyMessage" :virtualScrollerOptions="virtualScrollerOptions" />
</template>
 
<script>
import Listbox from 'primevue/listbox';
export default {
  name: 'tsListbox',
  components: {
    Listbox
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
    listStyle: null,
    disabled: Boolean,
    dataKey: null,
    multiple: Boolean,
    metaKeySelection: Boolean,
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
    emptyFilterMessage: {
        type: String,
        default: null
    },
    emptyMessage: {
        type: String,
        default: null
    },
    virtualScrollerOptions: {
        type: Object,
        default: null
    }
  }
}
</script>