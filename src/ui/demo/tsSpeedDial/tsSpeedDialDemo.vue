<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsSpeedDial</h1>
                <p>When pressed, a floating action button can display multiple primary actions that can be performed on a page.</p>
            </div>
        </div>
        <!-- <Toast /> -->
        <div class="card">
            <h5>Linear</h5>
            <div class="speeddial-linear-demo" :style="{ position: 'relative', height: '500px' }">
                <ts-speeddial :model="items" direction="up" />
                <ts-speeddial :model="items" direction="down" />
                <ts-speeddial :model="items" direction="left" />
                <ts-speeddial :model="items" direction="right" />
            </div>
        </div>

        <div class="card">
            <h5>Circle, Semi-Circle and Quarter-Circle</h5>
            <div class="speeddial-circle-demo" :style="{ position: 'relative', height: '500px' }">
                <ts-speeddial :model="items" radius="80" type="circle" buttonClass="p-button-warning" />
                <ts-speeddial :model="items" :radius="80" direction="up" type="semi-circle" />
                <ts-speeddial :model="items" :radius="80" direction="down" type="semi-circle" />
                <ts-speeddial :model="items" :radius="80" direction="left" type="semi-circle" />
                <ts-speeddial :model="items" :radius="80" direction="right" type="semi-circle" />
                <ts-speeddial :model="items" :radius="120" direction="up-left" type="quarter-circle" buttonClass="p-button-success" />
                <ts-speeddial :model="items" :radius="120" direction="up-right" type="quarter-circle" buttonClass="p-button-success" />
                <ts-speeddial :model="items" :radius="120" direction="down-left" type="quarter-circle" buttonClass="p-button-success" />
                <ts-speeddial :model="items" :radius="120" direction="down-right" type="quarter-circle" buttonClass="p-button-success" />
            </div>
        </div>

        <div class="card">
            <h5>Tooltip</h5>
            <div class="speeddial-tooltip-demo" :style="{ position: 'relative', height: '350px' }">
                <ts-speeddial :model="items" direction="up" class="speeddial-right" buttonClass="p-button-danger" :tooltipOptions="{position: 'left'}" />

                <ts-speeddial :model="items" direction="up" class="speeddial-left" buttonClass="p-button-help" :tooltipOptions="{position: 'right'}" />
            </div>
        </div>

        <div class="card">
            <h5>Transition Duration, Icon and No Rotate Animation</h5>
            <div class="speeddial-delay-demo" :style="{ position: 'relative', height: '350px' }">
                <ts-speeddial :model="items" direction="up" :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" />
            </div>
        </div>

        <div class="card">
            <h5>Mask</h5>
            <div class="speeddial-mask-demo" :style="{ position: 'relative', height: '350px' }">
                <ts-speeddial :model="items" :direction="up" mask />
            </div>
        </div>
        <TsSpeedDialDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsSpeedDialDoc from './tsSpeedDialDoc.vue'
// import { useToast } from "primevue/usetoast";

export default {
    components: {
        TsSpeedDialDoc
    },
    setup() {
        // const toast = useToast();

        const items = ref([
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    // toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    // toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    // toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            },
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://vuejs.org/'
                }
            }
        ]);

        return { items }
    }
}
</script>

<style lang="scss" scoped>

::v-deep(.speeddial-linear-demo) {
    .p-speeddial-direction-up {
        left: calc(50% - 2rem);
        bottom: 0;
    }

    .p-speeddial-direction-down {
        left: calc(50% - 2rem);
        top: 0;
    }

    .p-speeddial-direction-left {
        right: 0;
        top: calc(50% - 2rem);
    }

    .p-speeddial-direction-right {
        left: 0;
        top: calc(50% - 2rem);
    }
}

::v-deep(.speeddial-circle-demo) {
    .p-speeddial-circle {
        top: calc(50% - 2rem);
        left: calc(50% - 2rem);
    }

    .p-speeddial-semi-circle {
        &.p-speeddial-direction-up {
            left: calc(50% - 2rem);
            bottom: 0;
        }

        &.p-speeddial-direction-down {
            left: calc(50% - 2rem);
            top: 0;
        }

        &.p-speeddial-direction-left {
            right: 0;
            top: calc(50% - 2rem);
        }

        &.p-speeddial-direction-right {
            left: 0;
            top: calc(50% - 2rem);
        }
    }

    .p-speeddial-quarter-circle {
        &.p-speeddial-direction-up-left {
            right: 0;
            bottom: 0;
        }

        &.p-speeddial-direction-up-right {
            left: 0;
            bottom: 0;
        }

        &.p-speeddial-direction-down-left {
            right: 0;
            top: 0;
        }

        &.p-speeddial-direction-down-right {
            left: 0;
            top: 0;
        }
    }
}

::v-deep(.speeddial-tooltip-demo) {
    .p-speeddial-direction-up {
        &.speeddial-left {
            left: 0;
            bottom: 0;
        }

        &.speeddial-right {
            right: 0;
            bottom: 0;
        }
    }
}

::v-deep(.speeddial-delay-demo) {
    .p-speeddial-direction-up {
        left: calc(50% - 2rem);
        bottom: 0;
    }
}

::v-deep(.speeddial-mask-demo) {
    .p-speeddial-direction-up {
        right: 0;
        bottom: 0;
    }
}
</style>