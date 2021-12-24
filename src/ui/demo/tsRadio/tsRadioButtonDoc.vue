<template>
    <div>
        <div class="card">
            <TabView>
                <TabPanel header="Documentation">

		<h5>Getting Started</h5>
		<p>Two-way value binding is defined using the standard v-model directive.</p>
<pre v-code><code>
&lt;ts-radio-button name="city" value="Chicago" v-model="city" label="Chicago" /&gt;
&lt;ts-radio-button name="city" value="Los Angeles" v-model="city" label="Los Angeles" /&gt;

</code></pre>
<pre v-code.script><code>
export default {
	setup() {
        const cities = ref();
		return {
			city
		}
	}
}

</code></pre>
				<p>As model is two-way binding enabled, giving a default value to the model is enough to display a radio button as checked by default.</p>
<pre v-code.script><code>
export default {
    setup() {
        const city = ref('Chicago');
		return {
			city
		}
	}
}

</code></pre>

		<h5>Properties</h5>
        <p>Any property such as name and autofocus are passed to the underlying input element. Following is the additional property to configure the component.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>value</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value of the checkbox.</td>
                    </tr>
                    <tr>
                        <td>modelValue</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Value binding of the checkbox.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component input field.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Label text</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Events</h5>
        <p>Any valid event such as focus and blur.</p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>click</td>
                        <td>-</td>
                        <td>Callback to invoke on radio button click.</td>
                    </tr>
                    <tr>
                        <td>change</td>
                        <td>-</td>
                        <td>Callback to invoke on radio button value change.</td>
                    </tr>
                </tbody>
            </table>
        </div>

		<h5>Styling</h5>
		<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>p-radiobutton</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-radiobutton-box</td>
                        <td>Container of icon.</td>
                    </tr>
                    <tr>
                        <td>p-radiobutton-icon</td>
                        <td>Icon element.</td>
                    </tr>
                    <tr>
                        <td>p-radiobutton-label</td>
                        <td>Label element.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>
                </TabPanel>
                <TabPanel header="Compositon API Source">
                    <pre v-code><code>
                            {{ content }}
                        </code></pre>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const source = ref(`
<template>
    <div>
        <h5>Basic</h5>
        <div class="p-field-radiobutton">
            <ts-radio-button id="city1" name="city" value="Chicago" v-model="city" label="Chicago"/>
        </div>
        <div class="p-field-radiobutton">
            <ts-radio-button id="city2" name="city" value="Los Angeles" v-model="city" label="Los Angeles"/>
        </div>
        <div class="p-field-radiobutton">
            <ts-radio-button id="city3" name="city" value="New York" v-model="city" label="New York"/>
        </div>
        <div class="p-field-radiobutton">
            <ts-radio-button id="city4" name="city" value="San Francisco" v-model="city" label="San Francisco"/>
        </div>

        <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
        <div v-for="category of categories" :key="category.key" class="p-field-radiobutton">
            <ts-radio-button :id="category.key" name="category" :value="category" v-model="selectedCategory" :disabled="category.key === 'R'" :label="category.name"/>
        </div>

        <TsRadioButtonDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsRadioButtonDoc from './tsRadioButtonDoc.vue';
export default {
    components: {
        TsRadioButtonDoc
    },
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
<\\/script>
`)
        // eslint-disable-next-line no-useless-escape
        const content = ref(source.value.replace('<\\/script>', '<\/script>'))
        return {
            content
        }
    },
}
</script>
