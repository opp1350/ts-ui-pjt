<template>
    <div class="card">
        <!-- <h3>{{ `2. cusHeader == ${cusHeader}` }}</h3> -->
        <TabView :activeIndex="activeIndex" :lazy="lazy" :scrollable="scrollable">
            <template v-if="cusHeader">
                <TabPanel v-for="tab in tabs" :key="tab.title" :disabled="tab.disabled">
                    <template #header>
                        <i :class="tab.headerClass"></i>
                        <span>{{ tab.title }}</span>
                    </template>
                    <p>{{ tab.content }}</p>
                </TabPanel>
            </template>
            <template v-else>
                <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title" :disabled="tab.disabled">
                    <p>{{ tab.content }}</p>
                </TabPanel>
            </template>
        </TabView>
    </div>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
export default {
    components: {
        TabView,
        TabPanel
    },
    name: 'tsTabView',
    emits: ['update:activeIndex', 'tab-change', 'tab-click'],
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        lazy: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        tabs: null,
        cusHeader: {
            type: Boolean,
            default: false
        }
    },
    setup() {
       
    }
}
</script>