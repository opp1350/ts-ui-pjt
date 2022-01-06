<template>
    <div>
        <h5>Dynamic</h5>
        <ts-progressbar :value="value1" />

        <h5>Static</h5>
        <ts-progressbar :value="value2" :showValue="false" />

        <h5>Indeterminate</h5>
        <ts-progressbar mode="indeterminate" style="height: .5em" />
        
        <TsProgressBarDoc />
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import TsProgressBarDoc from './tsProgressBarDoc.vue'

export default {
    components: {
        TsProgressBarDoc
    },
    setup() {
        onMounted(() => {
            startProgress();
        })

        onBeforeUnmount(() => {
            endProgress();
        })
        
        const value1 = ref(0);
        const value2 = ref(50);
        const interval = ref(null);
        const startProgress = () => {
            interval.value = setInterval(() => {
                let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
                if (newValue >= 100) {
                    newValue = 100;
                }
                value1.value = newValue;
            }, 2000);
        };
        const endProgress = () => {
            clearInterval(interval.value);
            interval.value = null;
        };

        return { value1, value2 }
    }
}
</script>