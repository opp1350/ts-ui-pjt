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
            <ts-checkbox id="city1" name="city" value="Chicago" v-model="cities"></ts-checkbox>
            <label for="city1">Chicago</label>
        </div>
        <div class="p-field-checkbox">
            <ts-checkbox id="city2" name="city" value="Los Angeles" v-model="cities"></ts-checkbox>
            <label for="city2">Los Angeles</label>
        </div>
        <div class="p-field-checkbox">
            <ts-checkbox id="city3" name="city" value="New York" v-model="cities"></ts-checkbox>
            <label for="city3">New York</label>
        </div>
        <div class="p-field-checkbox">
            <ts-checkbox id="city4" name="city" value="San Francisco" v-model="cities"></ts-checkbox>
            <label for="city4">San Francisco</label>
        </div>
        {{cities}}
        <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
        <div v-for="category of categories" :key="category.key" class="p-field-checkbox">
            <ts-checkbox :id="category.key" name="category" :value="category" v-model="selectedCategories" :disabled="category.key === 'R'"></ts-checkbox>
            <label :for="category.key">{{category.name}}</label>
        </div>
        <Checkbox v-model="checked" :binary="true"/>
    </div>
</template>

<script>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox';
export default {
    components: {
        Checkbox
    },
    setup() {
        const checked = ref(false);
        const cities = ref([]);
        const categories = ref([
            {name: 'Accounting', key: 'A'},
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