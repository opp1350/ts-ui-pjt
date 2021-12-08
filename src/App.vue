<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <div id="app">
      <h2>{{inputName}}</h2>
      <p>{{personInfo}}</p>
      <input type="text" :value="inputName" @input="changeName" placeholder="이름을 작성해 주세요."/>
  </div>
</template>

<script>

import {computed} from 'vue';
import {useStore} from 'vuex';

function usePerson() {
    const store = useStore();

    const inputName = computed(() => store.state.person.name);
    const personInfo = computed(() => store.getters['person/personInfo']);
    const changeName = e => store.dispatch('person/changeName', e.target.value);

    return {
        inputName,
        personInfo,
        changeName
    }
}

export default {
    name: 'App',
    setup() {
        return {
            ...usePerson()
        }
    },
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
