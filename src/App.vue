<template>
  <GuidMain />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
</div>
<router-view />
<ts-button></ts-button>
</template>

<script>
import TsButton from './ts/components/tsButton.vue';

import GuidMain from './ui/GuidMain.vue';

export default {
    name: 'App',
    components: {
        GuidMain,
        TsButton
    }
}
</script>

<style>
</style>
