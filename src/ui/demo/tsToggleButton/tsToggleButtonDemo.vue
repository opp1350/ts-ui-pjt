<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsToggleButton</h1>
                <p>ToggleButton is used to select a boolean value using a button.</p>
            </div>
        </div>
        <h5>Basic</h5>
        <ts-togglebutton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" />

        <h5>Customized</h5>
        <ts-togglebutton v-model="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style="width: 10em" />
        <TsToggleButtonDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsToggleButtonDoc from './tsToggleButtonDoc.vue'

export default {
    components: {
        TsToggleButtonDoc
    },
    setup() {
        const checked1 = ref(false);
        const checked2 = ref(true);

        return { checked1, checked2 }
    }
}
</script>