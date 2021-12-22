<template>
  <AutoComplete v-model="value" class="ts-auto-complete" :modelValue="modelValue" :suggestions="suggestions" :field="field" :optionGroupLabel="optionGroupLabel" 
  :optionGroupChildren="optionGroupChildren" :scrollHeight="scrollHeight" :dropdown="dropdown" :dropdownMode="dropdownMode" :autoHighlight="autoHighlight" :multiple="multiple"
  :minLength="minLength" :delay="delay" :appendTo="appendTo" :forceSelection="forceSelection" :completeOnFocus="completeOnFocus" :inputClass="inputClass" :inputStyle="inputStyle"
  :style="style" :panelClass="panelClass" :virtualScrollerOptions="virtualScrollerOptions" />
</template>
 
<script>
import AutoComplete from 'primevue/autocomplete';
export default {
    name: 'tsAutoComplete',
    components: {
        AutoComplete
    },
    props: {
        modelValue: null,
        suggestions: {
            type: Array,
            default: null
        },
        field: {
            type: [String,Function],
            default: null
        },
        optionGroupLabel: null,
        optionGroupChildren: null,
        scrollHeight: {
            type: String,
            default: '200px'
        },
        dropdown: {
            type: Boolean,
            default: false
        },
        dropdownMode: {
            type: String,
            default: 'blank'
        },
        autoHighlight: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        minLength: {
            type: Number,
            default: 1
        },
        delay: {
            type: Number,
            default: 300
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        forceSelection: {
            type: Boolean,
            default: false
        },
        completeOnFocus: {
            type: Boolean,
            default: false
        },
        inputClass: null,
        inputStyle: null,
        class: null,
        style: null,
        panelClass: null,
        virtualScrollerOptions: {
            type: Object,
            default: null
        }
    },
    data() {
        return{
            value: null
        }
    }
}
</script>