<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsInputMask</h1>
                <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>
            </div>
        </div>
        <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-4">
                <label for="basic">Basic</label>
                <ts-input-mask mask="99-999" v-model="val1" placeholder="99-999" />
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="ssn">SSN</label>
                <ts-input-mask mask="999-99-9999" v-model="val2" placeholder="999-99-9999" />
            </div>

            <div class="p-field p-col-12 p-md-4">
                <label for="date">Date</label>
                <ts-input-mask mask="9999/99/99" v-model="val3" placeholder="yyyy/mm/dd" slotChar="yyyy/mm/dd" />
            </div>

            <div class="p-field p-col-12 p-md-4">
                <label for="Phone">Phone</label>
                <ts-input-mask mask="(999) 999-9999" v-model="val4" placeholder="(999) 999-9999" />
            </div>

            <div class="p-field p-col-12 p-md-4">
                <label for="phoneext">Phone Ext</label>
                <ts-input-mask mask="(999) 999-9999? x99999" v-model="val5" placeholder="(999) 999-9999? x99999"/>
            </div>

            <div class="p-field p-col-12 p-md-4">
                <label for="serial">Serial</label>
                <ts-input-mask mask="a*-999-a999" v-model="val6" placeholder="a*-999-a999" />
            </div>
        </div>

        <TsInputMaskDoc />
    </div>
</template>
<script>
import { ref } from 'vue';
import TsInputMaskDoc from './tsInputMaskDoc.vue'

export default {
    components: {
        TsInputMaskDoc
    },
    setup() {
        const val1 = ref();
        const val2 = ref();
        const val3 = ref();
        const val4 = ref();
        const val5 = ref();
        const val6 = ref();

        return { val1, val2, val3, val4, val5, val6 }
    }
}
</script>
