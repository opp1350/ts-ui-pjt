<template>
  <CascadeSelect v-model="value" :modelValue="modelValue" :options="options" :optionLabel="optionLabel" :optionValue="optionValue" :optionGroupLabel="optionGroupLabel"
  :optionGroupChildren="optionGroupChildren" :placeholder="placeholder" :disabled="disabled" :dataKey="dataKey" :inputId="inputId" :tabindex="tabindex" :ariaLabelledBy="ariaLabelledBy"
  :appendTo="appendTo" :panelClass="panelClass" :loading="loading" :loadingIcon="loadingIcon" />
</template>
 
<script>
import CascadeSelect from 'primevue/cascadeselect';
export default {
  name: 'tsCascadeSelect',
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