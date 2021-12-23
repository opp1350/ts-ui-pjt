<template>
    <div class="switch:check">
        <div class="p-field-checkbox">
            <ts-checkbox ref="switchRef" id="darkModeSwitch" :binary="true" @change="switchEvent" v-model="darkMode" :label="darkMode ? '라이트 모드로 변경' : '다크 모드로 변경'"/>
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

        // localStorage로 캐시저장 => 새로고침을 해도 다크모드가 초기화 되지 않음
        // 다크모드가 true일 때
        if(localStorage.getItem('preferredDarkMode') && localStorage.getItem('preferredDarkMode') === 'true') {
            console.log(`nextTick 작동 이전 다크모드 = ${localStorage.getItem('preferredDarkMode')}`) // true
            console.log(`nextTick 이전 darkMode.value = ${darkMode.value}`) // darkMode.value가 false로 초기화 됨
            nextTick(() => {
                darkMode.value = true // darkMode.value가 false인 현상을 수정
                darkAttrs()
            })
        // 다크모드가 false일 때
        } else {
            if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                nextTick(() => {
                    darkAttrs()
                })
            }
        }
        const darkAttrs = () => {
            if(darkMode.value) {
                document.documentElement.setAttribute('data-mode', 'dark')
                document.body.classList.remove('lighter')
                document.body.classList.add('darker')
                localStorage.setItem('preferredDarkMode', 'true')
            } else {
                document.documentElement.setAttribute('data-mode', 'light')
                document.body.classList.remove('darker')
                document.body.classList.add('lighter')
                localStorage.setItem('preferredDarkMode', 'false')
            }
            
        }
        const switchToggle = () => {
            if (darkMode.value) {
                darkAttrs()
                window.alert('테마를 다크모드로 변경합니다.')
            } else {
                darkAttrs()
                window.alert('테마를 라이트모드로 변경합니다.')
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