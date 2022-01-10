<template>
    <div class="ts-guide">
        <header class="ts-guide-head">
            <a class="menu-trigger" :class="{open : show}" @click="show = !show"  href="javascript:void(0);">
                <div class="icon-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
            <h1>TS UI Framework</h1>
            <dark-mode/>
        </header>
        <div class="ts-guide-body">
            <app-menu :mobileOpenMenu="show"></app-menu>
            <router-view class="ts-guide-cont"></router-view>
        </div>
    </div>
</template>
<script>
import AppMenu from '@/AppMenu.vue';
import { ref } from 'vue'

export default {
    name: 'tsGudieHome',
    components: {
        'app-menu': AppMenu
    },
    setup () {
        const show = ref(false)
        return {
            show
        }
    },
}
</script>