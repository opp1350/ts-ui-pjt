<template>
    <div>
        <h5>Basic</h5>
        <ts-progress-spinner />

        <h5>Custom</h5>
        <ts-progress-spinner style="width:50px;height:50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>

        <TsProgressSpinnerDoc />
    </div>
</template>

<script>
import TsProgressSpinnerDoc from './tsProgressSpinnerDoc.vue'
export default {
    components: {
        TsProgressSpinnerDoc
    }
}
</script>