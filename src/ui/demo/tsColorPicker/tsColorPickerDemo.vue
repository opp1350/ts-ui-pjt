<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsColorPicker</h1>
                <p>ColorPicker is an input component to select a color.</p>
            </div>
        </div>
        <h5>Inline</h5>
        <ts-colorpicker v-model="color1" :inline="true" />

        <h5>Overlay</h5>
        <ts-colorpicker v-model="color2" />

        <TsColorPickerDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsColorPickerDoc from './tsColorPickerDoc.vue'

export default {
    components: {
        TsColorPickerDoc
    },
    setup() {
        const color1 = ref(null);
        const color2 = ref('1976D2');

        return { color1, color2 }
    }
}
</script>