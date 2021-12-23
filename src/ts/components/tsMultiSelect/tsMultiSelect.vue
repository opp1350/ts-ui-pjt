<template>
  <MultiSelect v-model="val" :modelValue="modelValue" :options="options" :optionLabel="optionLabel" :optionValue="optionValue" :optionDisabled="optionDisabled" :optionGroupLabel="optionGroupLabel"
  :optionGroupChildren="optionGroupChildren" :scrollHeight="scrollHeight" :placeholder="placeholder" :disabled="disabled" :tabindex="tabindex" :inputId="inputId" :dataKey="dataKey"
  :filter="filter" :filterPlaceholder="filterPlaceholder" :filterLocale="filterLocale" :filterMatchMode="filterMatchMode" :filterFields="filterFields" :ariaLabelledBy="ariaLabelledBy"
  :appendTo="appendTo" :emptyFilterMessage="emptyFilterMessage" :emptyMessage="emptyMessage" :display="display" :panelClass="panelClass" :selectedItemsLabel="selectedItemsLabel"
  :maxSelectedLabels="maxSelectedLabels" :selectionLimit="selectionLimit" :showToggleAll="showToggleAll" :loading="loading" :loadingIcon="loadingIcon" 
  :virtualScrollerOptions="virtualScrollerOptions" :selectAll="selectAll"
  @update:modelValue="$emit('update:modelValue', $event)"
  @before-show="$emit('before-show', $event)"
  @before-hide="$emit('before-hide', $event)"
  @change="$emit('change', $event)"
  @show="$emit('show', $event)"
  @hide="$emit('hide', $event)"
  @filter="$emit('filter', $event)"
  @selectall-change="$emit('selectall-change', $event)"
  class="ts-multiselect" />
</template>
 
<script>
import MultiSelect from 'primevue/multiselect';
export default {
  name: 'tsMultiSelect',
  emits: ['update:modelValue', 'before-show', 'before-hide', 'change', 'show', 'hide', 'filter', 'selectall-change'],
  components: {
    MultiSelect
  },
  data() {
      return {
        val: null
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
    placeholder: String,
    disabled: Boolean,
    tabindex: String,
    inputId: String,
    dataKey: null,
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
    display: {
      type: String,
      default: 'comma'
    },
    panelClass: null,
    selectedItemsLabel: {
      type: String,
      default: '{0} items selected'
    },
    maxSelectedLabels: {
      type: Number,
      default: null
    },
    selectionLimit: {
      type: Number,
      default: null
    },
    showToggleAll: {
      type: Boolean,
      default: true
    },
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
    },
    selectAll: {
      type: Boolean,
      default: null
    }
  }
}
</script>