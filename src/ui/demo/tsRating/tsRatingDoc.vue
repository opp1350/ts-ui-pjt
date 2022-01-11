<template>
    <div>
        <div class="card">
            <TabView>
                <TabPanel header="Documentation">

		<h5>Getting Started</h5>
		<p>Two-way value binding is defined using v-model.</p>
<pre v-code><code>
&lt;ts-rating v-model="val" /&gt;

</code></pre>

		<h5>Number of Stars</h5>
		<p>Number of stars to display is defined with <i>stars</i> property, default is 5.</p>
<pre v-code><code>
&lt;ts-rating v-model="val" :stars="7"/&gt;

</code></pre>

		<h5>Cancel</h5>
		<p>A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.</p>
<pre v-code><code>
&lt;ts-rating v-model="val" :cancel="false" /&gt;

</code></pre>

		<h5>Properties</h5>
        <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                        <td>modelValue</td>
                        <td>number</td>
                        <td>null</td>
                        <td>Value of the rating.</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that the element should be disabled.</td>
                    </tr>
                    <tr>
                        <td>readonly</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When present, it specifies that component is read-only.</td>
                    </tr>
                    <tr>
                        <td>stars</td>
                        <td>number</td>
                        <td>5</td>
                        <td>Number of stars.</td>
                    </tr>
                    <tr>
                        <td>cancel</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>When specified a cancel icon is displayed to allow clearing the value.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Events</h5>
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
                        <td>change</td>
                        <td>event.originalEvent: Original event <br />
                        event.value: Selected option value </td>
                        <td>Callback to invoke on value change.</td>
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
                        <td>p-rating</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-rating-star</td>
                        <td>Star element</td>
                    </tr>
                    <tr>
                        <td>p-rating-star-on</td>
                        <td>Selected star element.</td>
                    </tr>
                    <tr>
                        <td>p-rating-cancel</td>
                        <td>Cancel icon.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>
                </TabPanel>
                <TabPanel header="Composition API Source">
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
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Rating</h1>
                <p>Rating component is a star based selection input.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic {{val1}}</h5>
                <ts-rating v-model="val1" />

                <h5>Without Cancel</h5>
                <ts-rating v-model="val2" :cancel="false" />

                <h5>ReadOnly</h5>
                <ts-rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />

                <h5>Disabled</h5>
                <ts-rating :modelValue="8" :disabled="true" :stars="10" />
            </div>
        </div>

        <TsRatingDoc/>
    </div>
</template>

<script>
import TsRatingDoc from './tsRatingDoc';

export default {
    data() {
        return {
            val1: null,
            val2: 3,
        }
    },
    components: {
        TsRatingDoc
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
