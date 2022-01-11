<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsSlider</h1>
                <p>Slider is an input component to provide a numerical input.</p>
            </div>
        </div>
        <h5>Basic: {{value1}}</h5>
        <ts-slider v-model="value1" />

        <h5>Input: {{value2}}</h5>
        <InputText v-model.number="value2" />
        <ts-slider v-model="value2" />

        <h5>Step: {{value3}}</h5>
        <ts-slider v-model="value3" :step="20" />

        <h5>Decimal Step: {{value4}}</h5>
        <ts-slider v-model="value4" :step="0.5" />

        <h5>Range: {{value5}}</h5>
        <ts-slider v-model="value5" :range="true" />

        <h5>Vertical: {{value6}}</h5>
        <ts-slider v-model="value6" orientation="vertical" />
        <TsSliderDoc />
    </div>
</template>

<script>
import { ref } from 'vue'
import TsSliderDoc from './tsSliderDoc.vue'

export default {
    components: {
        TsSliderDoc
    },
    setup() {
        const value1 = ref(null);
        const value2 = ref(50);
        const value3 = ref(20);
        const value4 = ref(30.5);
        const value5 = ref([20,80]);
        const value6 = ref(50);

        return { value1, value2, value3, value4, value5, value6 }
    }
}
</script>

<style scoped>
.p-slider-horizontal, .p-inputtext {
    width: 14rem;
}
.p-slider-vertical {
     height: 14rem;
}
</style>