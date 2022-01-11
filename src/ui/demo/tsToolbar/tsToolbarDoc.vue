<template>
    <div>
        <div class="card">
            <TabView>
                <TabPanel header="Documentation">

		<h5>Getting Started</h5>
		<p>Toolbar provides <i>start</i> and <i>end</i> templates to place content at these sections.</p>
<pre v-code><code>
&lt;ts-toolbar&gt;
    &lt;template #start&gt;
        &lt;Button label="New" icon="pi pi-plus" class="p-mr-2" /&gt;
        &lt;Button label="Upload" icon="pi pi-upload" class="p-button-success" /&gt;
        &lt;i class="pi pi-bars p-toolbar-separator p-mr-2" /&gt;
        &lt;SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"&gt;&lt;/SplitButton&gt;
    &lt;/template&gt;

    &lt;template #end&gt;
        &lt;Button icon="pi pi-search" class="p-mr-2" /&gt;
        &lt;Button icon="pi pi-calendar" class="p-button-success p-mr-2" /&gt;
        &lt;Button icon="pi pi-times" class="p-button-danger" /&gt;
    &lt;/template&gt;
&lt;/ts-toolbar&gt;

</code></pre>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>start</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>end</td>
                        <td>-</td>
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
						<td>p-toolbar</td>
						<td>Main container element.</td>
					</tr>
					<tr>
						<td>p-toolbar-group-left</td>
						<td>Left content container.</td>
					</tr>
					<tr>
						<td>p-toolbar-group-right</td>
						<td>Right content container.</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>
                </TabPanel>
                <TabPanel header="Composition API Source">
                    <pre v-code><code>
                        {{ compositionContent }}
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
        <div>
            <ts-toolbar>
                <template #start>
                    <ts-button label="New" icon="pi pi-plus" class="p-mr-2" />
                    <ts-button label="Upload" icon="pi pi-upload" class="p-button-success" />
                    <i class="pi pi-bars p-toolbar-separator p-mr-2" />
                    <ts-splitbutton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></ts-splitbutton>
                </template>

                <template #end>
                    <ts-button icon="pi pi-search" class="p-mr-2" />
                    <ts-button icon="pi pi-calendar" class="p-button-success p-mr-2" />
                    <ts-button icon="pi pi-times" class="p-button-danger" />
                </template>
            </ts-toolbar>
        </div>
        <TsToolbarDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsToolbarDoc from './tsToolbarDoc.vue'

export default {
    components: {
        TsToolbarDoc
    },
    setup() {
        const items = ref([
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            },
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://vuejs.org/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ]);

        return { items }
    }
}
<\\/script>

<style scoped>
.p-button,
.p-splitbutton {
    margin-bottom: 0.5rem;
}
</style>
        `)
        // eslint-disable-next-line no-useless-escape
       const compositionContent = ref(source.value.replace('<\\/script>', '<\/script>'))
       return { compositionContent }
    }
}
</script>