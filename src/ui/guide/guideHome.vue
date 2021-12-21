<template>
    <div class="ts-guide">
        <header class="ts-guide-head">
            <h1>twoson UI Framework GuidMainPage</h1>
            <dark-mode/>
        </header>
        <div class="ts-guide-body">
            <aside>
                <app-menu></app-menu>
            </aside>
            <router-view class="ts-guide-cont"></router-view>
        </div>
    </div>
</template>
<script>
// import { ref } from 'vue';
import AppMenu from '@/AppMenu.vue';

export default {
    name: 'tsGudieHome',
    components: {
        'app-menu': AppMenu
    },
    setup () {
    },
    // data() {
    //     return {
    //         selectedNum: 0
    //     }
    // },
    computed: {
    },
    methods: {
        // selectMenu(idx) {
        //     this.selectedNum = idx;
        // }
    }
}
</script>