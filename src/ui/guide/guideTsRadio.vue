<template>
    <div>
        <p>tsradio</p>
        <h1>counter : {{ counter }}</h1>
        <ts-button :label="label" @click="addCount"></ts-button>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const counter = ref(1)
        const label = 'add'
        const addCount = () => {
            counter.value += 1
        }
        return {
            counter,
            label,
            addCount
        }
    }
}
</script>