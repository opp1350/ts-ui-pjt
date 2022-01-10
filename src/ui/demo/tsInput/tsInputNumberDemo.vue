<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsInputNumber</h1>
                <p>InputNumber is an input component to provide numerical input.</p>
            </div>
        </div>
        <h5>Numerals</h5>
        <div class="p-fluid p-grid p-formgrid">
            <div class="p-field p-col-12 p-md-3">
                <label for="integeronly">Integer Only</label>
                <ts-input-number id="integeronly" v-model="value1" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="withoutgrouping">Without Grouping</label>
                <ts-input-number id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmaxfraction">Min-Max Fraction Digits</label>
                <ts-input-number id="minmaxfraction" v-model="value3" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmax">Min-Max Boundaries</label>
                <ts-input-number id="minmax" v-model="value4" mode="decimal" :min="0" :max="100" />
            </div>

            <div class="p-field p-col-12 p-md-3">
                <label for="locale-user">User Locale</label>
                <ts-input-number id="locale-user" v-model="value5" mode="decimal" :minFractionDigits="2" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="locale-us">United States Locale</label>
                <ts-input-number id="locale-us" v-model="value6" mode="decimal" locale="en-US" :minFractionDigits="2" />
            </div>
        </div>

        <h5>Currency</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-ko">Korea</label>
                <ts-input-number id="currency-ko" v-model="value9" mode="currency" currency="KRW" locale="en-KO" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="currency-us">United States</label>
                <ts-input-number id="currency-us" v-model="value9" mode="currency" currency="USD" locale="en-US" />
            </div>
        </div>

        <h5>Prefix and Suffix</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="mile">Mile</label>
                <ts-input-number id="mile" v-model="value13" suffix=" mi" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="percent">Percent</label>
                <ts-input-number id="percent" v-model="value14" prefix="%" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="expiry">Expiry</label>
                <ts-input-number id="expiry" v-model="value15" prefix="Expires in " suffix=" days" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="temperature">Temperature</label>
                <ts-input-number id="temperature" v-model="value16" prefix="↑ " suffix="℃" :min="0" :max="40" />
            </div>
        </div>

        <h5>Buttons</h5>
        <div class="p-grid p-fluid">
            <div class="p-field p-col-12 p-md-3">
                <label for="stacked">Stacked</label>
                <ts-input-number id="stacked" v-model="value17" showButtons mode="currency" currency="USD" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="horizontal">Horizontal with Step</label>
                <ts-input-number id="horizontal" v-model="value18" showButtons buttonLayout="horizontal" :step="0.25"
                    decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />
            </div>
            <div class="p-field p-col-12 p-md-3">
                <label for="minmax-buttons">Min-Max Boundaries</label>
                <ts-input-number id="minmax-buttons" v-model="value20" mode="decimal" showButtons :min="0" :max="100" />
            </div>
        </div>

        <div class="p-field p-col-12 p-md-3">
            <label for="vertical" style="display: block">Vertical</label>
            <ts-input-number id="vertical" v-model="value19" mode="decimal" showButtons buttonLayout="vertical" style="width:4rem"
                decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>

        <TsInputNumberDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsInputNumberDoc from './tsInputNumberDoc.vue';

export default {
    components: {
        TsInputNumberDoc
    },
    setup() {
        const value1 = ref(42723);
        const value2 = ref(58151);
        const value3 = ref(2351.35);
        const value4 = ref(50);
        const value5 = ref(151351);
        const value6 = ref(115744);
        const value7 = ref(635524);
        const value8 = ref(732762);
        const value9 = ref(1500);
        const value10 = ref(2500);
        const value11 = ref(4250);
        const value12 = ref(5002);
        const value13 = ref(20);
        const value14 = ref(50);
        const value15 = ref(10);
        const value16 = ref(20);
        const value17 = ref(20);
        const value18 = ref(10.50);
        const value19 = ref(25);
        const value20 = ref(50);

        return { value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
            value11, value12, value13, value14, value15, value16, value17, value18, value19, value20 }
    }
}
</script>