<template>
    <div class="card">
    <!-- <h5>Default</h5> -->
        <TabView :activeIndex="activeIndex" :lazy="lazy" :scrollable="scrollable">
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title" :disabled="tab.disabled">
                <p>{{ tab.content }}</p>
            </TabPanel>
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
        tabs: null
    },
    setup() {
        
    }
}
</script>