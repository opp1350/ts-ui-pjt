<template>
    <div class="switch:check">
        <div class="p-field-checkbox">
            <label for="darkModeSwitch">{{ darkMode ? '라이트 모드로 변경' : '다크 모드로 변경' }}</label>
            <ts-checkbox title="다크 모드로 변경" ref="switchRef" id="darkModeSwitch" :binary="true" @change="switchEvent" v-model="darkMode"/>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, nextTick } from 'vue'
export default defineComponent({
    name: 'DarkMode',
    setup(){
        const darkMode = ref(false)
        const switchRef = ref(null)
        if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            nextTick(() => {
                switchRef.value.checked = true
                switchToggle()
            })
        }
        const darkAttrs = () => {
            if(darkMode.value) {
                document.documentElement.setAttribute('data-mode', 'dark')
                document.body.classList.remove('lighter')
                document.body.classList.add('darker')
            } else {
                document.documentElement.setAttribute('data-mode', 'light')
                document.body.classList.remove('darker')
                document.body.classList.add('lighter')
            }
            
        }
        const switchToggle = () => {
            if (switchRef.value.checked) {
                // darkMode.value = true
                darkAttrs()
            } else {
                // darkMode.value = false
                darkAttrs()
            }
        }

        const switchEvent = () => {
            nextTick(() => {
                switchToggle()
            })
        }
        return {
            switchRef,
            switchEvent,
            darkMode
        }
    }
})
</script>