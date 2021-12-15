<template>
    <div>
        <p>tsradio</p>
        <h1>counter : {{ counter }}</h1>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const counter = ref(1)
        return {
            counter
        }
    }
}
</script>