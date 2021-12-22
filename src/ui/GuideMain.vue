<template>
    <div class="ts-guide">
        <header class="ts-guide-head">
            <h1>twoson UI Framework GuidMainPage</h1>
        </header>
        <div class="ts-guide-body">
            <aside>
                <ul>
                    <li
                        v-for="(item, index) in guideLink"
                        :key="index"
                        @click.stop="selectMenu(index)">
                        <router-link :to="'/GuideMain/'+ item.link" :class="{'on' : this.selectedNum === index}">{{ item.menuName }}</router-link>
                    </li>
                </ul>
            </aside>
            <router-view class="ts-guide-cont"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GuideMain',
    components: {
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
                },
                {
                    link: 'tsCheckbox',
                    menuName: 'tsCheckbox',
                    selected: false
                },
                {
                    link: 'tsAutoComplete',
                    menuName: 'tsAutoComplete',
                    selected: false
                },
                {
                    link: 'tsCalendar',
                    menuName: 'tsCalendar',
                    selected: false
                },
                {
                    link: 'tsCascadeSelect',
                    menuName: 'tsCascadeSelect',
                    selected: false
                },
                {
                    link: 'tsChips',
                    menuName: 'tsChips',
                    selected: false
                },
                {
                    link: 'tsColorPicker',
                    menuName: 'tsColorPicker',
                    selected: false
                },
                {
                    link: 'tsDropdown',
                    menuName: 'tsDropdown',
                    selected: false
                },
                {
                    link: 'tsEditor',
                    menuName: 'tsEditor',
                    selected: false
                },
                {
                    link: 'tsKnob',
                    menuName: 'tsKnob',
                    selected: false
                },
                {
                    link: 'tsListbox',
                    menuName: 'tsListbox',
                    selected: false
                },
                {
                    link: 'tsMultiSelect',
                    menuName: 'tsMultiSelect',
                    selected: false
                },
                {
                    link: 'tsPassword',
                    menuName: 'tsPassword',
                    selected: false
                },
                {
                    link: 'tsRating',
                    menuName: 'tsRating',
                    selected: false
                },
                {
                    link: 'tsSelectButton',
                    menuName: 'tsSelectButton',
                    selected: false
                },
                {
                    link: 'tsSlider',
                    menuName: 'tsSlider',
                    selected: false
                },
                {
                    link: 'tsTextarea',
                    menuName: 'tsTextarea',
                    selected: false
                },
                {
                    link: 'tsToggleButton',
                    menuName: 'tsToggleButton',
                    selected: false
                },
                {
                    link: 'tsTreeSelect',
                    menuName: 'tsTreeSelect',
                    selected: false
                },
                {
                    link: 'tsTriStateCheckbox',
                    menuName: 'tsTriStateCheckbox',
                    selected: false
                },
                {
                    link: 'tsButton',
                    menuName: 'tsButton',
                    selected: false
                },
                {
                    link: 'tsSpeedDial',
                    menuName: 'tsSpeedDial',
                    selected: false
                },
                {
                    link: 'tsSplitButton',
                    menuName: 'tsSplitButton',
                    selected: false
                },
                {
                    link: 'tsAccordion',
                    menuName: 'tsAccordion',
                    selected: false
                },
                {
                    link: 'tsCard',
                    menuName: 'tsCard',
                    selected: false
                },
                {
                    link: 'tsDeferredContent',
                    menuName: 'tsDeferredContent',
                    selected: false
                },
                {
                    link: 'tsDivider',
                    menuName: 'tsDivider',
                    selected: false
                },
                {
                    link: 'tsFieldset',
                    menuName: 'tsFieldset',
                    selected: false
                },
                {
                    link: 'tsPanel',
                    menuName: 'tsPanel',
                    selected: false
                },
                {
                    link: 'tsScrollPanel',
                    menuName: 'tsScrollPanel',
                    selected: false
                },
                {
                    link: 'tsSplitter',
                    menuName: 'tsSplitter',
                    selected: false
                },
                {
                    link: 'tsTabView',
                    menuName: 'tsTabView',
                    selected: false
                },
                {
                    link: 'tsToolbar',
                    menuName: 'tsToolbar',
                    selected: false
                },
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