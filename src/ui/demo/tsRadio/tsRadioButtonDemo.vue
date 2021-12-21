// tsRadio에 대한 Demo 파일
<template>
    <div>
        <h5>Basic</h5>
        <div class="p-field-radiobutton">
            <ts-radio-button id="city1" name="city" value="Chicago" v-model="city" />
            <label for="city1">Chicago</label>
        </div>
        <div class="p-field-radiobutton">
            <ts-radio-button id="city2" name="city" value="Los Angeles" v-model="city" />
            <label for="city2">Los Angeles</label>
        </div>
        <div class="p-field-radiobutton">
            <ts-radio-button id="city3" name="city" value="New York" v-model="city" />
            <label for="city3">New York</label>
        </div>
        <div class="p-field-radiobutton">
            <ts-radio-button id="city4" name="city" value="San Francisco" v-model="city" />
            <label for="city4">San Francisco</label>
        </div>

        <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
        <div v-for="category of categories" :key="category.key" class="p-field-radiobutton">
            <ts-radio-button :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === 'R'" />
            <label :for="category.key">{{category.name}}</label>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const city = ref();
        const categories = ref([
            {name: 'Accounting', key: 'A'}, 
            {name: 'Marketing', key: 'M'}, 
            {name: 'Production', key: 'P'}, 
            {name: 'Research', key: 'R'}
        ]);
        const selectedCategory = ref(categories.value[1]);

        return { city, categories, selectedCategory }
    }
}
</script>