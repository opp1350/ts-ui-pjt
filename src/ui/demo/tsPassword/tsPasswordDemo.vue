<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsPassword</h1>
                <p>Password displays strength indicator for password fields.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <ts-password v-model="value1" :feedback="false" />

                <h5>Password Meter</h5>
                <ts-password v-model="value2" />

                <h5>Show Password</h5>
                <ts-password v-model="value3" toggleMask></ts-password>

                <h5>Templating</h5>
                <ts-password v-model="value4">
                    <template #header>
                        <h6>Pick a password</h6>
                    </template>
                    <template #footer>
                        <Divider />
                        <p class="p-mt-2">Suggestions</p>
                        <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </ts-password>
            </div>
        </div>

        <TsPasswordDoc/>
    </div>
</template>

<script>
import TsPasswordDoc from './tsPasswordDoc';

export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value4: null
        }
    },
    components: {
        TsPasswordDoc
    }
}
</script>

<style lang="scss" scoped>
::v-deep(.p-password input) {
    width: 15rem
}
</style>
