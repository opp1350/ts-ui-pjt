<template>
    <div>
        <div class="card">
            <h5>Horizontal</h5>
            <ts-splitter style="height: 300px" class="p-mb-5" :splitPanel="splitPanel">
                <template v-slot:splitterPanel="{ index, items }">
                    <!-- slot을 이용한 방법 -->
                    <p>{{ `Horizontal Panel ${index+1}` }}</p>
                    <p>{{ items.title }}</p>
                </template>
            </ts-splitter>
        </div>
        <div class="card">
            <h5>Vertical</h5>
            <ts-splitter style="height: 300px" layout="vertical" :splitPanel="splitPanel">
                <template v-slot:splitterPanel="{ index, items }">
                    <p>{{ `Vertical Panel ${index+1}` }}</p>
                    <p>{{ items.title }}</p>
                </template>
            </ts-splitter>
        </div>

        <div class="card">
            <h5>Nested</h5>
            <ts-splitter style="height: 300px" :splitPanel="splitPanel1">
                <template v-slot:splitterPanel="{ index, items }">
                    <!-- slot을 이용한 방법 -->
                    <template v-if="index == 0">
                        <p>{{ `${index+1}. ${items.title}` }}</p>
                    </template>
                    <template v-else>
                        <ts-splitter layout="vertical" :splitPanel="splitPanel2">
                            <template v-slot:splitterPanel="{ index, items }">
                                <template v-if="index == 0">
                                    <p>{{ `${index+1}. ${items.title}` }}</p>
                                </template>
                                <template v-else>
                                    <ts-splitter :splitPanel="splitPanel3">
                                        <p>{{ `${index+1}. ${items.title}` }}</p>
                                    </ts-splitter>
                                </template>
                            </template>
                        </ts-splitter>
                    </template>
                </template>
            </ts-splitter>
        </div>
        <TsSplitterDoc />>
    </div>
</template>

<script>
import { ref } from 'vue'
import TsSplitterDoc from './tsSplitterDoc.vue'
export default {
    components: {
        TsSplitterDoc
    },
    setup() {
        const splitPanel = ref([
            {class: 'p-d-flex p-ai-center p-jc-center',
             title: '1st Panel'},
            {class: 'p-d-flex p-ai-center p-jc-center',
             title: '2st Panel'}
        ])
        const splitPanel1 = ref([
            {class: 'p-d-flex p-ai-center p-jc-center',
             title: '1st Panel',
             size: 20,
             minSize: 10},
            {class: 'p-d-flex p-ai-center p-jc-center',
             title: '1st Panel',
             size: 80}
        ])
        const splitPanel2 = ref([
            {class: 'p-d-flex p-ai-center p-jc-center',
             title: '2st Panel',
             size: 15},
            {class: 'p-d-flex p-ai-center p-jc-center',
             title: '2st Panel',
             size: 85}
        ])
        const splitPanel3 = ref([
            {class: 'p-d-flex p-ai-center p-jc-center',
             title: '3st Panel',
             size: 20},
            {class: 'p-d-flex p-ai-center p-jc-center',
             title: '3st Panel',
             size: 80}
        ])
        return { splitPanel,splitPanel1,splitPanel2,splitPanel3 }
    }
}
</script>