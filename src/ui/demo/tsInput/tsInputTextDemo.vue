<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsInputText</h1>
                <p>InputText renders a text field to enter data.</p>
            </div>
        </div>
        <h5>Basic</h5>
        <ts-input-text type="text" v-model="value1" />
        <span :style="{marginLeft: '.5em'}">{{value1}}</span>

        <h5>Floating Label</h5>
        <span class="p-float-label">
            <ts-input-text id="username" type="text" v-model="value2" />
            <label for="username">Username</label>
        </span>

        <h5>Left Icon</h5>
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <ts-input-text type="text" v-model="value3" placeholder="Search" />
        </span>

        <h5>Right Icon</h5>
        <span class="p-input-icon-right">
            <i class="pi pi-spin pi-spinner" />
            <ts-input-text type="text" v-model="value4" />
        </span>

        <h5>Help Text</h5>
        <div class="p-field">
            <label for="username1">Username</label>
            <ts-input-text id="username1" type="username" aria-describedby="username1-help" />
            <small id="username1-help">Enter your username to reset your password.</small>
        </div>

        <h5>Invalid</h5>
        <div class="p-field">
            <label for="username2">Username</label>
            <ts-input-text id="username2" type="username" aria-describedby="username2-help" class="p-invalid" />
            <small id="username2-help" class="p-error">Username is not available.</small>
        </div>

        <h5>Disabled</h5>
        <ts-input-text type="text" v-model="value5" disabled />

        <h5>Sizes</h5>
        <div class="sizes">
            <ts-input-text type="text" class="p-inputtext-sm" placeholder="Small"></ts-input-text>
            <ts-input-text type="text" placeholder="Normal"></ts-input-text>
            <ts-input-text type="text" class="p-inputtext-lg"  placeholder="Large"></ts-input-text>
        </div>

        <TsInputTextDoc />
    </div>
</template>
<script>
import { ref } from 'vue'
import TsInputTextDoc from './tsInputTextDoc.vue'

export default {
    components: {
        TsInputTextDoc
    },
    setup() {
        const value1 = ref();
        const value2 = ref();
        const value3 = ref();
        const value4 = ref();
        const value5 = ref('PrimeVue');

        return { value1, value2, value3, value4, value5 }
    },
}
</script>
<style lang="scss" scoped>
.sizes {
    .p-inputtext {
        display: block;
        margin-bottom: .5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.p-field * {
    display: block;
}
</style>
