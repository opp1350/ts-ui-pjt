<template>
    <div>
        <br/>
        <div>
            <TabView>
                <TabPanel header="Documentaion">
		<h5>Getting Started</h5>
		<p>Tabview element consists of one or more TabPanel elements. Header of the tab is defined using header attribute.</p>
<pre v-code><code>
&lt;ts-tabview :tabs="tabs"&gt;&lt;/ts-tabview&gt;

</code></pre>

        <h5>Active</h5>
		<p>Visibility of the content is specified with the <i>activeIndex</i> property that supports one or two-way binding.</p>
<pre v-code><code>
&lt;ts-tabview :tabs="tabs" :activeIndex="activeIndex" &gt;&lt;/ts-tabview&gt;

</code></pre>

        <p>Two-way binding requires v-model.</p>
<pre v-code><code>
&lt;ts-tabview :tabs="tabs" v-model::activeIndex="activeIndex" &gt;&lt;/ts-tabview&gt;

</code></pre>

		<h5>Disabled</h5>
		<p>A tab can be disabled to prevent the content to be displayed by setting the disabled property on a panel.</p>
<pre v-code><code>
&lt;ts-tabview :tabs="tabs1" &gt;&lt;/ts-tabview&gt;

</code></pre>

<pre v-code.script><code>
export default {
    setup() {
        const tabs1 = ref([
            {
                title: 'Header I',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
				disabled: true
            }
        ])
        return {
            tabs1
        }
    }
}

</code></pre>

		<h5>Header Template</h5>
		<p>Custom content for the title section of a panel is defined using the header template.</p>
<pre v-code><code>
&lt;ts-tabview class="tabview-custom" :tabs="tabs3" :cusHeader="true"&gt;&lt;/ts-tabview&gt;

</code></pre>
<pre v-code.script><code>
export default {
    setup() {
        const tabs3 = ref([
            {
                title: 'Header I',
                headerClass: 'pi pi-calendar',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                headerClass: 'pi pi-user',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                headerClass: 'pi pi-search',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            }
        ]);
        return {tabs3}
    }
</code></pre>

        <h5>Programmatic Control</h5>
		<p>Tabs can be controlled programmatically using <i>activeIndex</i> property.</p>
<pre v-code><code>
&lt;ts-button @click="active1 = 0" label="Activate 1st" /&gt;
&lt;ts-button @click="active1 = 0" label="Activate 2nd" /&gt;
&lt;ts-button @click="active1 = 0" label="Activate 3rd" /&gt;

&lt;ts-tabview :tabs="tabs" v-model:activeIndex="active1" &gt;&lt;/ts-tabview&gt;

</code></pre>

<pre v-code.script><code>
export default {
    setup() {
        const active1 = ref(0);
        return {active1}
    }
}

</code></pre>

        <h5>Scrollable</h5>
		<p>Enable <i>scrollable</i> property to display buttons at each side of the tab headers that scrolls the tab list.</p>
<pre v-code><code>
&lt;ts-button @click="active2 = 0" label="Activate 1st" /&gt;
&lt;ts-button @click="active2 = 29" label="Activate 30th" /&gt;
&lt;ts-button @click="active2 = 49" label="Activate 50th" /&gt;

&lt;ts-tabview :tabs="tabs2" v-model:activeIndex="active2" :scrollable="true" &gt;&lt;/ts-tabview&gt;

</code></pre>

		<h5>Properties of TabPanel</h5>
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
                        <td>null</td>
                        <td>Whether the tab is disabled.</td>
                    </tr>
				</tbody>
			</table>
		</div>

        <h5>Properties of TabView</h5>
        <p>Any additional properties like style and class are passed to the main container element.</p>
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
                        <td>activeIndex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Index of the active tab.</td>
                    </tr>
                    <tr>
                        <td>lazy</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.</td>
                    </tr>
                    <tr>
                        <td>scrollable</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>When enabled displays buttons at each side of the tab headers to scroll the tab list.</td>
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
                        <td>tab-change</td>
                        <td>event.originalEvent: Browser event  <br/>
                            event.index: Index of the selected tab
                        </td>
                        <td>Callback to invoke when an active tab is changed.</td>
                    </tr>
                     <tr>
                        <td>tab-click</td>
                        <td>event.originalEvent: Browser event  <br/>
                            event.index: Index of the clicked tab
                        </td>
                        <td>Callback to invoke when an active tab is clicked.</td>
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
                        <td>p-tabview</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-tabview-nav</td>
                        <td>Container of headers.</td>
                    </tr>
                    <tr>
                        <td>p-tabview-selected</td>
                        <td>Selected tab header.</td>
                    </tr>
                    <tr>
                        <td>p-tabview-panels</td>
                        <td>Container panels.</td>
                    </tr>
                    <tr>
                        <td>p-tabview-panel</td>
                        <td>Content of a tab.</td>
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
        <div class="card">
			<h5>1. Default</h5>
            <ts-tabview :tabs="tabs">
                <template #default="{ tabItem }">
                    <p>{{ tabItem.content }}</p>
                </template>
            </ts-tabview>
        </div>
		<div>
			<h5>2. Programmatic</h5>
            <ts-button @click="active1 = 0" label="Activate 1st"></ts-button>
            <ts-button @click="active1 = 1" label="Activate 2nd"></ts-button>
            <ts-button @click="active1 = 2" label="Activate 3rd"></ts-button>
			<ts-tabview :tabs="tabs" v-model:activeIndex="active1">
                <template #default="{ tabItem }">
                    <p>{{ tabItem.content }}</p>
                </template>
            </ts-tabview>
		</div>
		<div>
			<h5>3. Disabled</h5>
			<ts-tabview :tabs="tabs1">
                <template #default="{ tabItem }">
                    <p>{{ tabItem.content }}</p>
                </template>
            </ts-tabview>
		</div>
		<div>
			<h5>4. Custom Headers</h5>
            <ts-tabview class="tabview-custom" :tabs="tabs3" :cusHeader="true"></ts-tabview>
		</div>
		<div>
			<h5>5. Scrollable</h5>
			<div>
				<ts-button @click="active2 = 0" label="Activate 1st"></ts-button>
				<ts-button @click="active2 = 29" label="Activate 30th"></ts-button>
				<ts-button @click="active2 = 49" label="Activate 50th"></ts-button>
			</div>
			<ts-tabview :tabs="tabs2" v-model:activeIndex="active2" :scrollable="true">
                <template #default="{ tabItem }">
                    <p>{{ tabItem.content }}</p>
                </template>
			</ts-tabview>
		</div>
        <TsTabViewDoc />
    </div>
</template>

<script>
import { ref } from 'vue'
import TsTabViewDoc from './tsTabViewDoc.vue'
export default {
    components: {
      TsTabViewDoc,
    },
    setup() {
		const active1 = ref(0)
        const active2 = ref(0)
        const tabs = ref([
            {
                title: 'Header I',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            }
        ]);
		const tabs1 = ref([
            {
                title: 'Header I',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
				disabled: true

            }
        ]);
		const tabs2 = ref(Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` })));
        const tabs3 = ref([
            {
                title: 'Header I',
                headerClass: 'pi pi-calendar',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                headerClass: 'pi pi-user',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                headerClass: 'pi pi-search',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            }
        ]);
        return {
            active1,active2,tabs,tabs1,tabs2,tabs3
        }
    },
}
<\\/script>


<style lang="scss" scoped>
.p-button {
    margin-right: .5rem;
    margin-top: 1rem;
}

.tabview-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-tabview p {
    line-height: 1.5;
    margin: 0;
}
</style>

        `)

        // eslint-disable-next-line no-useless-escape
        const compositionContent = ref(source.value.replace('<\\/script>', '<\/script>'))
        return {
            compositionContent
        }
    }
}
</script>
