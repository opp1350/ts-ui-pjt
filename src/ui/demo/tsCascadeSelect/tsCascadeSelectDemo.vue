<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsCascadeSelect</h1>
                <p>CascadeSelect displays a nested structure of options.</p>
            </div>
        </div>
        <h5>Basic</h5>
        <ts-cascadeselect v-model="selectedCity1" :options="countries" optionLabel="cname" optionGroupLabel="name"
                :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" placeholder="Select a City" />

        <h5>Templating</h5>
        <ts-cascadeselect v-model="selectedCity2" :options="countries" optionLabel="cname" optionGroupLabel="name" 
                :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" placeholder="Select a City">
            <template #option="slotProps">
                <div class="country-item">
                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" v-if="slotProps.option.states" />
                    <i class="pi pi-compass p-mr-2" v-if="slotProps.option.cities"></i>
                    <i class="pi pi-map-marker p-mr-2" v-if="slotProps.option.cname"></i>
                    <span>{{slotProps.option.cname || slotProps.option.name}}</span>
                </div>
            </template>
        </ts-cascadeselect>

        <h5>Loading State</h5>
        <ts-cascadeselect placeholder="Loading..." loading style="minWidth: 14rem"></ts-cascadeselect>

        <TsCascadeSelectDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsCascadeSelectDoc from './tsCascadeSelectDoc.vue'

export default {
    components: {
        TsCascadeSelectDoc
    },
    setup() {
        const selectedCity1 = ref();
        const selectedCity2 = ref();
        const countries = ref([
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            {cname: 'Sydney', code: 'A-SY'},
                            {cname: 'Newcastle', code: 'A-NE'},
                            {cname: 'Wollongong', code: 'A-WO'}
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            {cname: 'Brisbane', code: 'A-BR'},
                            {cname: 'Townsville', code: 'A-TO'}
                        ]
                    },
                    
                ]
            },
            {
                name: 'Canada', 
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            {cname: 'Montreal', code: 'C-MO'},
                            {cname: 'Quebec City', code: 'C-QU'}
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            {cname: 'Ottawa', code: 'C-OT'},
                            {cname: 'Toronto', code: 'C-TO'}
                        ]
                    },
                    
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            {cname: 'Los Angeles', code: 'US-LA'},
                            {cname: 'San Diego', code: 'US-SD'},
                            {cname: 'San Francisco', code: 'US-SF'}
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            {cname: 'Jacksonville', code: 'US-JA'},
                            {cname: 'Miami', code: 'US-MI'},
                            {cname: 'Tampa', code: 'US-TA'},
                            {cname: 'Orlando', code: 'US-OR'}
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            {cname: 'Austin', code: 'US-AU'},
                            {cname: 'Dallas', code: 'US-DA'},
                            {cname: 'Houston', code: 'US-HO'}
                        ]
                    }
                ]
            }
        ]);

        return { selectedCity1, selectedCity2, countries }
    }
}
</script>

<style>
img {
    width: 18px;
    margin-right: 0.5rem;
}
</style>