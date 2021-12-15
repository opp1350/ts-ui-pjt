<template>
    <div>
        <p>tsradio</p>
        <h1>counter : {{ counter }}</h1>
        <ts-button :label="label"></ts-button>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const counter = ref(1)
        const label = 'add'
        return {
            counter,
            label
        }
    }
}
</script>