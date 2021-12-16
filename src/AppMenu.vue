<template>
    <div>
        <template v-for="item of menu" :key="item.name">
            <div>
                {{item.name}}
            </div>
            <ul>
                <li v-for="child of item.children" :key="child.name">
                    <router-link v-if="child.to" :to="child.to">
                        {{child.name}}
                    </router-link>
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
import menudata from '@/assets/menu/menu.json';
export default {
    setup() {
        const menu = {...menudata.data}
        return {
            menu
        }
    },
}
</script>
