<template>
    <div class="ts-guide">
        <header class="ts-guide-head">
            <h1>twoson UI Framework GuidMainPage</h1>
        </header>
        <div class="ts-guide-body">
            <aside>
                <!-- <ul>
                    <li
                        v-for="(item, index) in guideLink"
                        :key="index"
                        @click.stop="selectMenu(index)">
                        <router-link :to="'/GuideMain/'+ item.link" :class="{'on' : this.selectedNum === index}">{{ item.menuName }}</router-link>
                    </li>
                </ul> -->
                <Menu></Menu>
            </aside>
            <router-view class="ts-guide-cont"></router-view>
        </div>
    </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
    name: 'GuideMain',
    components: {
        Menu
    },
    data() {
        return {
            selectedNum: 0,
            guideLink: [
                {
                    link: 'tsGudieHome',
                    menuName: '가이드 메인',
                    selected: true
                },
                {
                    link: 'tsInput',
                    menuName: 'tsInput',
                    selected: false
                },
                {
                    link: 'tsRadio',
                    menuName: 'tsRadio',
                    selected: false
                }
            ]
        }
    },
    computed: {
    },
    methods: {
        selectMenu(idx) {
            this.selectedNum = idx;
        }
    }
}
</script>