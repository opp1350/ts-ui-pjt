<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsTextarea</h1>
                <p>Textarea is a multi-line text input element.</p>
            </div>
        </div>
        <h5>Basic</h5>
        <ts-textarea v-model="value1" rows="5" cols="30" />

        <h5>Auto Resize</h5>
        <ts-textarea v-model="value2" :autoResize="true" rows="5" cols="30" />

        <h5>Disabled</h5>
        <ts-textarea v-model="value3" disabled rows="5" cols="30" />

        <!-- <h5>Byte Check</h5>
        <ts-textarea v-model="value4" rows="5" cols="30" :maxByte="Number(100)"/> -->
        <TsTextareaDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsTextareaDoc from './tsTextareaDoc.vue'
export default {
    components: {
        TsTextareaDoc
    },
    setup() {
        const value1 = ref('');
        const value2 = ref('');
        const value3 = ref('');
        const value4 = ref('');
        
		return { value1, value2, value3, value4 }
    }
}
</script>