<template>
    <div class="mode-trigger">
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
        const changeLight = () => {
            document.documentElement.setAttribute('data-mode', 'light')
            document.body.classList.remove('darker')
            document.body.classList.add('lighter')
            localStorage.setItem('preferredDarkMode', 'false')
        }
        const changeDark = () => {
            document.documentElement.setAttribute('data-mode', 'dark')
            document.body.classList.remove('lighter')
            document.body.classList.add('darker')
            localStorage.setItem('preferredDarkMode', 'true')
        }

        console.log(`localStorage.getItem('preferredDarkMode')의 값은 null이 아닌가요? ==> ${localStorage.getItem('preferredDarkMode') !== null}`)
        // localStorage의 다크모드가 true일 때
        if(localStorage.getItem('preferredDarkMode') !== null && localStorage.getItem('preferredDarkMode') === 'true') {
            nextTick(() => {
                darkMode.value = true // darkMode.value가 false인 현상을 수정
                changeDark()
            })
        // localStorage의 값이 없거나(최초 접근) 다크모드가 false일 때 : 유저 설정에 따름
        } else {
            if(localStorage.getItem('preferredDarkMode') === null) {
                window.matchMedia("(prefers-color-scheme: dark)").matches ? (changeDark(), darkMode.value = true) : changeLight()
            } else {
                localStorage.getItem('preferredDarkMode') === 'false' ? changeLight() : (changeDark(), darkMode.value = true)
            }
        }
        const switchToggle = () => {
            if (darkMode.value) {
                changeDark()
                window.alert('테마를 다크모드로 변경합니다.')
            } else {
                changeLight()
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
            darkMode,
            changeLight,
            changeDark
        }
    }
})
</script>