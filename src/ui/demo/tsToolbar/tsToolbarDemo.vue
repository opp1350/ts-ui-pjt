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
</script>

<style scoped>
.p-button,
.p-splitbutton {
    margin-bottom: 0.5rem;
}
</style>