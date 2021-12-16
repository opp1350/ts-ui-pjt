<template>
    <div class="ts-guide">
        <header class="ts-guide-head">
            <h1>twoson UI Framework GuidMainPage</h1>
        </header>
        <div class="ts-guide-body">
            <!-- <aside>
                <ul>
                    <li
                        v-for="(item, index) in guideLink"
                        :key="index"
                        @click.stop="selectMenu(index)">
                        <router-link :to="item.link" :class="{'on' : this.selectedNum === index}">{{ item.menuName }}</router-link>
                    </li>
                </ul>
            </aside>
            <router-view class="ts-guide-cont"></router-view> -->
            메인
            <router-link to='home'>guid</router-link> |
            <router-link to='home'>git</router-link>
            <router-view class="ts-guide-cont"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'guideMain',
    components: {
    },
    setup () {
    }
    // data() {
    //     return {
    //         selectedNum: 0,
    //         guideLink: [
    //             {
    //                 link: 'tsGudieHome',
    //                 menuName: '가이드 메인',
    //                 selected: true
    //             },
    //             {
    //                 link: 'tsInput',
    //                 menuName: 'tsInput',
    //                 selected: false
    //             },
    //             {
    //                 link: 'tsRadio',
    //                 menuName: 'tsRadio',
    //                 selected: false
    //             }
    //         ]
    //     }
    // },
    // computed: {
    // },
    // methods: {
    //     selectMenu(idx) {
    //         this.selectedNum = idx;
    //     }
    // }
}
</script>