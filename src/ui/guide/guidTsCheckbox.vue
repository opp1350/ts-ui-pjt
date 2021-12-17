<template>
    <div>
        <div>
            <label for="myCheckbox">Basic</label>
            <ts-checkbox id="myCheckbox" binary/>
        </div>
        <div>
            <label for="myCheckbox2">disabled</label>
            <ts-checkbox id="myCheckbox2" disabled/>
        </div>
        <div>
            <label for="myCheckbox3">Multiple</label>
            <div class="p-field-checkbox">
                <ts-checkbox id="city1" name="city" value="Chicago" v-model="cities" /><label for="city1">Chicago</label>&nbsp;&nbsp;
                <ts-checkbox id="city2" name="city" value="Los Angeles" v-model="cities" /><label for="city2">Los Angeles</label>&nbsp;&nbsp;
                <ts-checkbox id="city3" name="city" value="New York" v-model="cities" /><label for="city3">New York</label>&nbsp;&nbsp;
                <ts-checkbox id="city4" name="city" value="San Francisco" v-model="cities" /><label for="city4">San Francisco</label>&nbsp;&nbsp;
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsCheckbox',
    components: {
    },
    data() {
		return {
			cities: []
		}
	}
}
</script>