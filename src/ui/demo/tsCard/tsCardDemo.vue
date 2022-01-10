<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsCard</h1>
                <p>Card is a flexible container component.</p>
            </div>
        </div>
        <ts-card style="width: 25rem; margin-bottom: 2em">
            <template #title>
                Simple Card
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
            <template #footer>
                Simple Card footer
            </template>
        </ts-card>

        <ts-card style="width: 25em">
            <template #header>
                <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 15rem" />
            </template>
            <template #title>
                Advanced Card
            </template>
            <template #subtitle>
                Card subtitle
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
            <template #footer>
                <ts-button icon="pi pi-check" label="Save" />
                <ts-button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
            </template>
        </ts-card>

        <TsCardDoc />
    </div>
</template>

<script>
import TsCardDoc from './tsCardDoc.vue'
export default {
    components: {
        TsCardDoc
    }
}
</script>

<style lang="scss" scoped>
p {
    line-height: 1.5;
    margin: 0;
}
</style>