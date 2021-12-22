// tsButton에 대한 Demo 파일
<template>
    <div>
        <h5>Basic</h5>
        <ts-button label="Submit" />
        <ts-button label="Disabled" disabled="disabled" />
        <ts-button label="Link" class="p-button-link" />

        <TsButtonDoc />
    </div>
</template>

<script>
import TsButtonDoc from './tsButtonDoc.vue'
export default {
    components: {
        TsButtonDoc
    },
    setup() {
    }
}
</script>
