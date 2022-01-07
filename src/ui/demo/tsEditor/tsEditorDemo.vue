<template>
    <div>
        <h5>Default</h5>
        <ts-editor v-model="value1" editorStyle="height: 320px"/>

        <!-- <h5>Customized</h5>
        <ts-editor v-model="value2" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
                    <button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
                    <button class="ql-underline" v-tooltip.bottom="'Underline'"></button>
                </span>
            </template>
        </ts-editor> -->
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref('<div>Welcome to PrimeVue <b>Editor</b></div><div><br></div>');
        const value2 = ref('');

        return { value1, value2 }
    }
}
</script>