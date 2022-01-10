<template>
    <aside :class="openMenu">
        <ul class="app-menu">
            <li class="first-depth" v-for="(item, perantIndex) of menu" :key="perantIndex">
                <a 
                    class="first-depth-item"
                    :class="{'home' : item.name == 'Home'}"
                    @click="selectTab(perantIndex)"
                    :aria-expanded="item.children ? item.show : undefined"
                    :role="item.children ? 'tab' : undefined"
                >
                    <span>{{item.name}}</span>
                </a>
                <template v-if="item.children">
                    <transition name="slide-up">
                        <ul class="second-depth" v-show="item.show">
                            <li
                                class="second-depth-item"
                                v-for="(child, index) of item.children" :key="index"
                            >
                                <router-link
                                    v-if="child.to"
                                    :to="child.to"
                                    @click="selectMenu(index, perantIndex)"
                                    :class="{'on' : selectedNum == index && selectedParentNum == perantIndex }"
                                >
                                    {{child.name}}
                                </router-link>
                            </li>
                        </ul>
                    </transition>
                </template>
            </li>
        </ul>
    </aside>
</template>

<script>
import { ref, computed } from 'vue';
import menudata from '@/assets/menu/menu.json';
export default {
    props: {
        mobileOpenMenu: {
            type: Boolean,
            default: null
        }
    },
    setup(props) {
        const menu = ref([...menudata.data])
        const selectedNum = ref(0)
        const selectedParentNum = ref(1)

        const selectMenu = (idx, parentIdx) => {
            selectedParentNum.value = parentIdx
            selectedNum.value = idx
        }
        const selectTab = (parentIdx) => {
            menu.value[parentIdx].show = !menu.value[parentIdx].show
        }

        const openMenu = computed(() => {
            return {
                'open': props.mobileOpenMenu,
            }
        })
        // windowWidth = window.innerWidth
        return {
            menu,
            selectedNum,
            selectedParentNum,
            selectMenu,
            selectTab,
            openMenu
        }
    },
}
</script>