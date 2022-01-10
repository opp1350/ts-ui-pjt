<template>
    <div>
         <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsAutoComplete</h1>
                <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>
            </div>
        </div>
        <h5>Basic</h5>
        <ts-autocomplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />

        <h5>Grouped</h5>
        <ts-autocomplete v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)" field="label" optionGroupLabel="label" optionGroupChildren="items">
            <template #optiongroup="slotProps">
                <div class="p-d-flex p-ai-center country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                    <div class="p-ml-2">{{slotProps.item.label}}</div>
                </div>
            </template>
        </ts-autocomplete>

        <h5>Dropdown, Templating and Force Selection</h5>
        <ts-autocomplete v-model="selectedCountry2" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name" forceSelection>
            <template #item="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                    <div class="p-ml-2">{{slotProps.item.name}}</div>
                </div>
            </template>
        </ts-autocomplete>

        <h5>Virtual Scroll (1000 Items)</h5>
        <ts-autocomplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 31 }" field="label" dropdown />

        <h5>Multiple</h5>
        <span class="p-fluid">
            <ts-autocomplete :multiple="true" v-model="selectedCountries" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
        </span>

        <TsAutoCompleteDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import {FilterService,FilterMatchMode} from 'primevue/api';
import countryData from '@/assets/data/countries.json';
import TsAutoCompleteDoc from './tsAutoCompleteDoc.vue';

export default {
    components: {
        TsAutoCompleteDoc
    },
    setup() {
        const countries = ref([...countryData.data]);
        const countryService = ref([...countryData.data]);
        const selectedCountry1 = ref();
        const selectedCountry2 = ref();
        const selectedCity = ref();
        const filteredCities = ref();
        const filteredCountries = ref();
        const selectedCountries = ref([]);
        const selectedItem = ref();
        const filteredItems = ref();
        const groupedCities = ref ([{
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
        }]);
        const items = Array.from({ length: 1000 }, (_, i) => ({ label: `Item #${i}`, value: i }));

        const searchCountry = (event) => {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    filteredCountries.value = [...countries.value];
                }
                else {
                    filteredCountries.value = countries.value.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        };
        const searchCity = (event) => {
            let query = event.query;
            let newFilteredCities = [];
            for (let country of groupedCities.value) {
                let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
                if (filteredItems && filteredItems.length) {
                    newFilteredCities.push({...country, ...{items: filteredItems}});
                }
            }

            filteredCities.value = newFilteredCities;
        }
        const searchItems = (event) => {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let _filteredItems = [];

            for(let i = 0; i < items.length; i++) {
                let item = items[i];
                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    _filteredItems.push(item);
                }
            }

            filteredItems.value = _filteredItems;
        }

        return { countries, countryService, selectedCountry1, selectedCountry2, selectedCity, filteredCities, filteredCountries, selectedCountries, groupedCities, searchCountry, searchCity, searchItems, selectedItem, filteredItems, items }
    }
}
</script>