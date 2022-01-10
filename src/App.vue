<template>
    <div class="app-wrap" :class="deviceClass">
        <router-view />
    </div>
</template>

<script>
import { ref, onUnmounted, onMounted, computed } from 'vue';
export default {
    name: 'App',
    components: {
    },
    setup() {
        const device = ref(false)
        const windowWidChk = () => {
            console.log(`Created ${window.innerWidth}`)
            if (window.innerWidth < 767) {
                console.log(`Device : Mobile || tablet ${window.innerWidth}`)
                device.value = true
            } else {
                console.log(`Device : PC ${window.innerWidth}`)
                device.value = false
            }
        }

        windowWidChk() // created (directly write in setup)
        onMounted(() => {
            console.log(`Mounted`)
            window.addEventListener('resize', windowWidChk)
        })
        onUnmounted(() => {
            console.log(`Destroyed`)
            window.removeEventListener('resize', windowWidChk)
        })
        const deviceClass = computed(() => {
            return {
                'mobile': device.value,
            }
        })
        return {
            windowWidChk,
            deviceClass
        }
    }
}
</script>

<style>
</style>
