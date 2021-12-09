<template>
  <GuidMain />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
</div>
<router-view />
</template>

<script>

import GuidMain from './ui/GuidMain.vue';

export default {
    name: 'App',
    components: {
        GuidMain
    }
}
</script>

<style>
</style>
