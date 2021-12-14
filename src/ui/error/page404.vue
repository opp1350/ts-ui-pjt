<template>
    <h1 class="error">잘못된 경로입니다. (404)</h1>
    <router-link tag="button" class="p-button p-component" :to="'/'">메인화면으로</router-link>
</template>

<style scoped>
    .error {
        padding: 5rem;
        text-align: center;
    }
    .p-button {
        display: block;
        max-width: 20rem;
        margin: 0 auto;
        font-size: 1.6rem;
    }
</style>