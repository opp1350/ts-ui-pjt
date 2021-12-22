<template>
    <ul class="app-manu">
        <li class="first-depth" v-for="(item, perantIndex) of menu" :key="perantIndex">
            <a href="javascript:void(0);" class="first-depth-item" :class="{'home' : item.name == 'Home'}">
                <span>{{item.name}}</span>
            </a>
            <ul class="second-depth" v-if="item.children">
                <li class="second-depth-item" v-for="(child, index) of item.children" :key="index">
                    <router-link v-if="child.to" :to="child.to" @click="selectMenu(index, perantIndex)" :class="{'on' : selectedNum == index && selectedParentNum == perantIndex }">
                        {{child.name}}
                    </router-link>
                </li>
            </ul>
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
        return {
            menu,
            selectedNum,
            selectedParentNum,
            selectMenu
        }
    },
}
</script>
