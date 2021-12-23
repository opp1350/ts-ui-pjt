<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsCard 가이드</a></h2>
        <div>
            <label for="cardInput1">basic </label>
            <ts-card>
                <template #header>
                    <img alt="user header" src="demo/images/usercard.png">
                </template>
                <template #title>
                    Advanced Card
                </template>
                <template #content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </template>
                <template #footer>
                    footer
                </template>
            </ts-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsCard',
    components: {
    }
}
</script>