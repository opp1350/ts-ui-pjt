<template>
    <ul class="app-manu">
        <li class="first-depth" v-for="(item, perantIndex) of menu" :key="perantIndex">
            <a class="first-depth-item" :class="{'home' : item.name == 'Home'}" @click="selectTab(perantIndex)" :aria-expanded="perantIndex == selectedParentNum" role="tab">
                <span>{{item.name}}</span>
            </a>
            <template v-if="item.children">
                <transition name="fade">
                    <ul class="second-depth" v-show="selectedParentNum == perantIndex">
                        <li class="second-depth-item" v-for="(child, index) of item.children" :key="index">
                            <router-link
                            v-if="child.to" :to="child.to" @click="selectMenu(index, perantIndex)" :class="{'on' : selectedNum == index && selectedParentNum == perantIndex }">
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
        const menu = {...menudata.data}
        const selectedNum = ref(0)
        const selectedParentNum = ref(0)

        const selectMenu = (idx, parentIdx) => {
            selectedParentNum.value = parentIdx
            selectedNum.value = idx
        }
        const selectTab = (parentIdx) => {
            selectedParentNum.value == parentIdx ? selectedParentNum.value = -1 : selectedParentNum.value = parentIdx
            
        }
        console.log(menu)
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
<style scoped>
/* fade 애니메이션 시작 (느리게 열기) */
.fade-enter-active {
    transition: all .8s ease-out;
}
/* fade 애니메이션 끝 (빠르게 닫기) */
.fade-leave-active {
    transition: all 0.45s cubic-bezier(0.190, 1.000, 0.220, 1.000);
}
.fade-enter-to, .fade-leave-from {
    max-height: 1000px;
}
.fade-leave-to, .fade-enter-from {
    max-height: 1px;
}
</style>