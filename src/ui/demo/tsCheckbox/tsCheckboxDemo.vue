// tsCheckbox에 대한 Demo 파일
<template>
    <div>
        <h5>Basic</h5>
        <div class="p-field-checkbox">
            <ts-checkbox id="binary" v-model="checked" :binary="true"></ts-checkbox>
            <label for="binary">{{checked}}</label>
        </div>

         <h5>Multiple</h5>
        <div class="p-field-checkbox">
            <ts-checkbox id="city1" name="city" value="Cicago" v-model="cities" label="Cicagoooo" @change="event"></ts-checkbox>
        </div>
       <div class="p-field-checkbox">
            <ts-checkbox id="city2" name="city" value="Los Angeles" v-model="cities" label="Los Angeles" @change="event"></ts-checkbox>
        </div>
        <div class="p-field-checkbox">
            <ts-checkbox id="city3" name="city" value="New York" v-model="cities" label="New York" @change="event"></ts-checkbox>
        </div>
        <div class="p-field-checkbox">
            <ts-checkbox id="city4" name="city" value="San Francisco" v-model="cities" label="San Francisco" @change="event"></ts-checkbox>
        </div>
        {{strCities}}
        <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
        <div v-for="category of categories" :key="category.key" class="p-field-checkbox">
            <ts-checkbox :id="category.key" name="category" :value="category" v-model="selectedCategories" :disabled="category.key === 'R'" :label="category.name"></ts-checkbox>
        </div>

        <TsCheckboxDoc />
    </div>
</template>

<script>
import { ref } from 'vue'
import TsCheckboxDoc from './tsCheckboxDoc.vue'
export default {
    components: {
        TsCheckboxDoc
    },
    setup() {
        const checked = ref(false);
        const cities = ref([]);
        const strCities = ref('');
        const categories = ref([
            {name: 'Accoundddting', key: 'A'},
            {name: 'Marketing', key: 'M'},
            {name: 'Production', key: 'P'},
            {name: 'Research', key: 'R'}
        ]);
        const selectedCategories = ref(categories.value.slice(1,3));
        const event = () => {
            console.log(ref(cities).value);
            cities.value.forEach((item) => {
                strCities.value = strCities.value + item + ','
            }); 
            
        }
        return {
            checked,
            cities,
            categories,
            selectedCategories,
            event,
            strCities
        }
    }
}
</script>