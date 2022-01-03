<template>
    <ul class="app-manu">
        <li class="first-depth" v-for="(item, perantIndex) of menu" :key="perantIndex">
            <a 
                class="first-depth-item"
                :class="{'home' : item.name == 'Home'}"
                @click="selectTab(perantIndex)"
                :aria-expanded="item.name !== 'Home' ? item.show : undefined"
                :role="item.name !== 'Home' ? 'tab' : undefined"
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
</template>

<script>
import { ref } from 'vue';
import menudata from '@/assets/menu/menu.json';
export default {
    setup() {
        const menuArr = ref([...menudata.data])
        const menu = ref(menuArr.value.map(obj=> ({ ...obj, show: true })))
        const selectedNum = ref(0)
        const selectedParentNum = ref(1)

        const selectMenu = (idx, parentIdx) => {
            selectedParentNum.value = parentIdx
            selectedNum.value = idx
        }
        const selectTab = (parentIdx) => {
            console.log(parentIdx, menu.value[parentIdx])
            menu.value[parentIdx].show = !menu.value[parentIdx].show
        }
        return {
            menu,
            selectedNum,
            selectedParentNum,
            selectMenu,
            selectTab
        }
    },
}
</script>