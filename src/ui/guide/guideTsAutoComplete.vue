<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsAutoComplete 가이드</a></h2>
        항목 예시: item #0
        <div>
            <label for="autoComplete1">basic </label>
            <ts-auto-complete v-model="autoComplete_val1" :suggestions="filteredItems" @complete="searchItems" />
        </div>
        <div>
            <label for="autoComplete2">dropdown </label>
            <ts-auto-complete v-model="autoComplete_val2" :suggestions="filteredItems" @complete="searchItems" dropdown/>
        </div>
        <div>
            <!--suggestions 리스트에서 여러 항목 선택 가능-->
            <label for="autoComplete2">multiple </label>
            <ts-auto-complete v-model="autoComplete_val3" :suggestions="filteredItems" @complete="searchItems" multiple/>
        </div>
        <div>
            <!--suggestions 리스트에서 선택하지 않을 시 인풋 초기화-->
            <label for="autoComplete2">force selection </label>
            <ts-auto-complete v-model="autoComplete_val4" :suggestions="filteredItems" @complete="searchItems" dropdown forceSelection />
        </div>
        항목 예시: Berlin
        <div>
            <label for="autoComplete1">Grouped </label>
            <ts-auto-complete v-model="autoComplete_val5" :suggestions="filteredCities" @complete="searchCity($event)" field="label" optionGroupLabel="label" optionGroupChildren="items">
                <!--Templating-->
                <!-- <template #item="slotProps">
                    <div>
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div>{{slotProps.item.name}}</div>
                    </div>
                </template> -->
            </ts-auto-complete>
        </div>
        <br>
        
    </div>
</template>
<script>
import {FilterService,FilterMatchMode} from 'primevue/api';

export default {
    name: 'GuideTsForm',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
            autoComplete_val1: null,
            autoComplete_val2: '',
            autoComplete_val3: [],
            autoComplete_val4: '',
            autoComplete_val5: '',
            // suggestions 아이템 데이터
            filteredCities: null,
            filteredItems: null,
            groupedCities: [{
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
            }],
            items: Array.from({ length: 10 }, (_, i) => ({ label: `Item #${i}`, value: i })),
            listbox_options: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
            ]
        }
    },
    methods: {
        searchCity(event) {
            let query = event.query;
            let filteredCities = [];

            for (let country of this.groupedCities) {
                let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
                if (filteredItems && filteredItems.length) {
                    filteredCities.push({...country, ...{items: filteredItems}});
                }
            }

            this.filteredCities = filteredCities;
        },
        searchItems(event) {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let filteredItems = [];

            for(let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    filteredItems.push(item.label.toLowerCase());
                }
            }

            this.filteredItems = filteredItems;
        }
    }
}
</script>