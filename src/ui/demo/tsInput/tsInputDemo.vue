<template>
    <div>
        <!-- tsInputDemo입니당
        <ts-input-text 
            v-model="value1"
            placeholder="입력하세요"
            disabled
        />
        <p>{{value1}}</p> -->
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

        <!-- <h5>Help Text</h5>
        <div class="p-field">
            <label for="username1">Username</label>
            <ts-input-text id="username1" type="username" aria-describedby="username1-help" />
            <small id="username1-help">Enter your username to reset your password.</small>
        </div> -->

        <h5>Disabled</h5>
        <ts-input-text type="text" v-model="value5" disabled />
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
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
