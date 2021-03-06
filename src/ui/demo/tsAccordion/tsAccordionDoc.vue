<template>
    <div>
        <div class="card">
            <TabView>
                <TabPanel header="Documentation">

		<h5>Getting Started</h5>
		<p>Accordion element consists of one or more AccordionTab elements. Title of the tab is defined using header attribute.</p>
<pre v-code><code>
&lt;ts-accordion&gt;
	&lt;ts-accordiontab header="Header I"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header II"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header III"&gt;
		Content
	&lt;/ts-accordiontab&gt;
&lt;/ts-accordion&gt;

</code></pre>

		<h5>Active</h5>
		<p>Visibility of the content is specified with the <i>activeIndex</i> property that supports one or two-way binding.</p>
<pre v-code><code>
&lt;ts-accordion :activeIndex="0"&gt;
	&lt;ts-accordiontab header="Header I"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header II"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header III"&gt;
		Content
	&lt;/ts-accordiontab&gt;
&lt;/ts-accordion&gt;

</code></pre>

		<p>Two-way binding requires v-model.</p>
<pre v-code><code>
&lt;ts-accordion v-model:activeIndex="activeIndex"&gt;
	&lt;ts-accordiontab header="Header I"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header II"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header III"&gt;
		Content
	&lt;/ts-accordiontab&gt;
&lt;/ts-accordion&gt;

</code></pre>

		<h5>Multiple</h5>
		<p>By default only one tab at a time can be active, enabling multiple property changes this behavior to allow multiple
			tabs be active at the same time.</p>
<pre v-code><code>
&lt;ts-accordion :multiple="true"&gt;
	&lt;ts-accordiontab header="Header I"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header II"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header III"&gt;
		Content
	&lt;/ts-accordiontab&gt;
&lt;/ts-accordion&gt;

</code></pre>

		<h5>Disabled</h5>
		<p>A tab can be disabled by setting the <i>disabled</i> property to true.</p>
<pre v-code><code>
&lt;ts-accordion&gt;
	&lt;ts-accordiontab header="Header I"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header II"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header III" :disabled="true"&gt;
		Content
	&lt;/ts-accordiontab&gt;
&lt;/ts-accordion&gt;

</code></pre>

		<h5>Custom Content at Headers</h5>
		<p>Custom content for the title section of a panel is defined using the header template.</p>
<pre v-code><code>
&lt;ts-accordion&gt;
	&lt;ts-accordiontab&gt;
		&lt;template #header&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header I&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab&gt;
		&lt;template #header&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header II&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab&gt;
		&lt;template #header&gt;
			&lt;i class="pi pi-calendar"&gt;&lt;/i&gt;
			&lt;span&gt;Header III&lt;/span&gt;
		&lt;/template&gt;
		Content
	&lt;/ts-accordiontab&gt;
&lt;/ts-accordion&gt;

</code></pre>

		<h5>Programmatic Control</h5>
		<p>Tabs can be controlled programmatically using <i>activeIndex</i> property.</p>
<pre v-code><code>
&lt;ts-button @click="active = 0" class="p-button-text" label="Activate 1st" /&gt;
&lt;ts-button @click="active = 1" class="p-button-text" label="Activate 2nd" /&gt;
&lt;ts-button @click="active = 2" class="p-button-text" label="Activate 3rd" /&gt;

&lt;ts-accordion :multiple="true" :activeIdex="active"&gt;
	&lt;ts-accordiontab header="Header I"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header II"&gt;
		Content
	&lt;/ts-accordiontab&gt;
	&lt;ts-accordiontab header="Header III"&gt;
		Content
	&lt;/ts-accordiontab&gt;
&lt;/ts-accordion&gt;

</code></pre>

<pre v-code.script><code>
export default {
    setup() {
        const active = ref(0)
        return {
            active
        }
    }
}

</code></pre>

		<h5>Dynamic Tabs</h5>
		<p>Tabs can be generated dynamically using the standard <i>v-for</i> directive.</p>
<pre v-code><code><template v-pre>
&lt;ts-accordion&gt;
	&lt;AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title"&gt;
		&lt;p&gt;{{tab.content}}&lt;/p&gt;
	&lt;/AccordionTab&gt;
&lt;/ts-accordion&gt;
</template>
</code></pre>

<pre v-code.script><code>
export default {
    setup() {
        const tabs = ref([
            {title: 'Title 1', content: 'Content 1'},
            {title: 'Title 3', content: 'Content 2'},
            {title: 'Title 3', content: 'Content 3'}
        ])
        return {
            tabs
        }
    }
}

</code></pre>

        <h5>Lazy Rendering</h5>
		<p>All tabs are rendered when mounted and inactive tabs are hidden with CSS. Enabling <i>lazy</i> option activates the dynamic mode where a tab is only rendered at DOM when it is active. This option is
        useful to speed up the initial rendering performance if there are many tabs.</p>

<pre v-code><code>
&lt;ts-accordion lazy&gt;
	&lt;AccordionTab header="Header I"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header II"&gt;
		Content
	&lt;/AccordionTab&gt;
	&lt;AccordionTab header="Header III"&gt;
		Content
	&lt;/AccordionTab&gt;
&lt;/ts-accordion&gt;

</code></pre>

		<h5>Properties of AccordionTab</h5>
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
					<td>header</td>
					<td>string</td>
					<td>null</td>
					<td>Orientation of tab headers.</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>boolean</td>
					<td>false</td>
					<td>Whether the tab is disabled.</td>
				</tr>
				</tbody>
			</table>
		</div>

		<h5>Properties of Accordion</h5>
        <p>Any property as style and class are passed to the main container element. Following is the additional property to configure the component.</p>
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
                        <td>multiple</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, multiple tabs can be activated at the same time.</td>
                    </tr>
					<tr>
                        <td>activeIndex</td>
                        <td>number|array</td>
                        <td>null</td>
                        <td>Index of the active tab or an array of indexes in multiple mode.</td>
                    </tr>
                    <tr>
                        <td>lazy</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.</td>
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
                        <td>tab-open</td>
                        <td>event.originalEvent: Browser event  <br/>
                            event.index: Opened tab index
                        </td>
                        <td>Callback to invoke when a tab gets expanded.</td>
                    </tr>
                    <tr>
                        <td>tab-close</td>
                        <td>event.originalEvent: Browser event  <br/>
                            event.index: Closed tab index
                        </td>
                        <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
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
					<td>p-accordion</td>
					<td>Container element.</td>
				</tr>
				<tr>
					<td>p-accordion-header</td>
					<td>Header of a tab.</td>
				</tr>
				<tr>
					<td>p-accordion-content</td>
					<td>Container of a tab.</td>
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
        <h5>Default</h5>
        <ts-accordion :activeIndex="0">
            <ts-accordiontab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ts-accordiontab>
            <ts-accordiontab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </ts-accordiontab>
            <ts-accordiontab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </ts-accordiontab>
        </ts-accordion>

        <h5>Multiple</h5>
        <ts-accordion :multiple="true" :activeIndex="[0]">
            <ts-accordiontab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ts-accordiontab>
            <ts-accordiontab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </ts-accordiontab>
            <ts-accordiontab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </ts-accordiontab>
			<ts-accordiontab header="Header IV" :disabled="true">
				<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ts-accordiontab>
        </ts-accordion>

        <h5>Programmatic</h5>
        <div class="p-pb-3">
            <ts-button @click="active = 0" class="p-button-text" label="Activate 1st" />
            <ts-button @click="active = 1" class="p-button-text  p-mr-2" label="Activate 2nd" />
            <ts-button @click="active = 2" class="p-button-text  p-mr-2" label="Activate 3rd" />
        </div>

        <ts-accordion v-model:activeIndex="active">
            <ts-accordiontab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ts-accordiontab>
            <ts-accordiontab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ration  voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </ts-accordiontab>
            <ts-accordiontab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </ts-accordiontab>
        </ts-accordion>

        <h5>Custom Headers</h5>
        <ts-accordion class="accordion-custom" :activeIndex="0">
            <ts-accordiontab>
                <template #header>
                    <i class="pi pi-calendar"></i>
                    <span>Header I</span>
                </template>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ts-accordiontab>
            <ts-accordiontab>
                <template #header>
                    <i class="pi pi-user"></i>
                    <span>Header II</span>
                </template>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </ts-accordiontab>
            <ts-accordiontab>
                <template #header>
                    <i class="pi pi-search"></i>
                    <span>Header III</span>
                    <i class="pi pi-cog"></i>
                </template>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </ts-accordiontab>
        </ts-accordion>

        <h5>Dynamic Tabs</h5>
        <ts-accordion>
            <ts-accordiontab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{tab.content}}</p>
            </ts-accordiontab>
        </ts-accordion>

        <TsAccordionDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsAccordionDoc from './tsAccordionDoc.vue'
export default {
  name: 'tsAccordionTab',
  components: {
      TsAccordionDoc
  },
  setup() {
      const active = ref(0);
      const tabs = ref([
            {
                title: "Header I", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Header II", 
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: "Header III", 
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            }
        ]);

		return { active, tabs }
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
