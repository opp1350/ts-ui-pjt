<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsTriStateCheckbox</h1>
                <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
            </div>
        </div>
        <div class="p-field-checkbox p-m-0">
            <ts-tristatecheckbox v-model="value"/>
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