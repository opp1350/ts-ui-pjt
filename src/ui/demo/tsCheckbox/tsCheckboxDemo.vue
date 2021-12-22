// tsCheckbox에 대한 Demo 파일
<template>
    <div>
        <h5>Basic</h5>
        <div class="p-field-checkbox">
            <ts-checkbox id="binary" v-model="checked" :binary="true" :label="checked"></ts-checkbox>
        </div>

         <h5>Multiple</h5>
        <div class="p-field-checkbox">
            <ts-checkbox id="city1" name="city" value="Chicago" v-model="cities" label="Chicago"></ts-checkbox>
        </div>
       <div class="p-field-checkbox">
            <ts-checkbox id="city2" name="city" value="Los Angeles" v-model="cities" label="Los Angeles"></ts-checkbox>
        </div>
        <div class="p-field-checkbox">
            <ts-checkbox id="city3" name="city" value="New York" v-model="cities" label="New York"></ts-checkbox>
        </div>
        <div class="p-field-checkbox">
            <ts-checkbox id="city4" name="city" value="San Francisco" v-model="cities" label="San Francisco"></ts-checkbox>
        </div>

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
        const categories = ref([
            {name: 'Accoundddting', key: 'A'},
            {name: 'Marketing', key: 'M'},
            {name: 'Production', key: 'P'},
            {name: 'Research', key: 'R'}
        ]);
        const selectedCategories = ref(categories.value.slice(1,3));
        return {
            checked,
            cities,
            categories,
            selectedCategories
        }
    }
}
</script>