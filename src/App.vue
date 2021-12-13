<template>
  <GuidMain />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
</div>
<router-view />
<div>
  <p>PrimeVUE TEST</p>
  <InputText />
  <ts-Button></ts-Button>
</div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
