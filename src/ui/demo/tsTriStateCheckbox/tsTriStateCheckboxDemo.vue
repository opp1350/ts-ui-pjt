<template>
    <div>
        <div class="p-field-checkbox p-m-0">
            <ts-tristate-checkbox v-model="value"/>
            <label>{{value == null ? 'null' : value}}</label>
        </div>
        <TsTriStateCheckboxDoc/>
    </div>
</template>

<script>
import { ref } from 'vue';
import TsTriStateCheckboxDoc from './tsTriStateCheckboxDoc.vue'

export default {
    components: {
        TsTriStateCheckboxDoc
    },
    setup() {
        const value = ref(null);

		return { value }
    }
}
</script>