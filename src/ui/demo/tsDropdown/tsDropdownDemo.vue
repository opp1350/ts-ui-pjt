<template>
    <div>
        <h5>Basic</h5>
        <ts-dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" />

        <h5>Editable</h5>
        <ts-dropdown v-model="selectedCity2" :options="cities" optionLabel="name" :editable="true"/>

        <h5>Grouped</h5>
        <ts-dropdown v-model="selectedGroupedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
            <template #optiongroup="slotProps">
                <div class="p-d-flex p-ai-center country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                    <div>{{slotProps.option.label}}</div>
                </div>
            </template>
        </ts-dropdown>

        <h5>Advanced with Templating, Filtering and Clear Icon</h5>
        <ts-dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true">
            <template #value="slotProps">
                <div class="country-item country-item-value" v-if="slotProps.value">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                    <div>{{slotProps.value.name}}</div>
                </div>
                <span v-else>
                    {{slotProps.placeholder}}
                </span>
            </template>
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" />
                    <div>{{slotProps.option.name}}</div>
                </div>
            </template>
        </ts-dropdown>

        <h5>Loading State</h5>
        <ts-dropdown placeholder="Loading..." loading></ts-dropdown>

        <h5>Virtual Scroll (1000 Items)</h5>
        <ts-dropdown v-model="selectedItem1" :options="items" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 31 }" placeholder="Select Item"></ts-dropdown>

        <h5>Virtual Scroll (1000 Items) and Lazy</h5>
        <ts-dropdown v-model="selectedItem2" :options="lazyItems" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 31, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item">
            <template v-slot:loader="{ options }">
                <div class="p-d-flex p-ai-center p-p-2" style="height: 31px" >
                    <Skeleton :width="options.even ? '60%' : '50%'" height="1rem" />
                </div>
            </template>
        </ts-dropdown>
    </div>
</template>
<script>
import { ref } from 'vue';
import Skeleton from 'primevue/skeleton';

export default {
    components: {
        Skeleton
    },
    setup() {
        const selectedCity1 = ref();
        const selectedCity2 = ref();
        const selectedCountry = ref();
        const selectedGroupedCity = ref();
        const selectedItem1 = ref();
        const selectedItem2 = ref();
        const loading = ref(false);
        const cities = ref([
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ]);
        const countries = ref([
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ]);
        const groupedCities = ref([
            {
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }
        ]);

        const items = ref(Array.from({ length: 1000 }, (_, i) => ({ label: `Item #${i}`, value: i })));
        const lazyItems = ref(Array.from({ length: 1000 }));

        return { selectedCity1, selectedCity2, selectedCountry, selectedGroupedCity, cities, countries, groupedCities, selectedItem1, selectedItem2, loading, items, lazyItems}
    },
    loadLazyTimeout: null,
    methods: {
        onLazyLoad(event) {
            this.loading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];

                for (let i = first; i < last; i++) {
                    lazyItems[i] = { label: `Item #${i}`, value: i };
                }

                this.lazyItems = lazyItems;
                this.loading = false;
            }, Math.random() * 1000 + 250);
        }
    }
}
</script>

<style lang="scss" scoped>
.p-dropdown {
    width: 14rem;
}

.country-item {
    img {
        width: 17px;
        margin-right: 0.5rem;
    }
}
</style>