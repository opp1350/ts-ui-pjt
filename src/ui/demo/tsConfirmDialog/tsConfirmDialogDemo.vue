<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsConfirmDialog</h1>
                <p>ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.</p>
            </div>
        </div>
        <!-- <Toast /> -->
        <!-- <ConfirmDialog></ConfirmDialog>
        <ConfirmDialog group="positionDialog"></ConfirmDialog> -->
        <ts-confirm-dialog></ts-confirm-dialog>
        <ts-confirm-dialog group="positionDialog"></ts-confirm-dialog>

        <div class="card">
            <h5>Basic</h5>
            <ts-button @click="confirm1()" icon="pi pi-check" label="Confirm" class="p-mr-2"></ts-button>
            <ts-button @click="confirm2()" icon="pi pi-times" label="Delete"></ts-button>

            <h5>Position</h5>
            <div class="p-grid p-dir-col">
                <div class="p-col">
                    <ts-button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" class="p-button-help p-mr-2"></ts-button>
                    <ts-button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" class="p-button-help"></ts-button>
                </div>
                <div class="p-col">
                    <ts-button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" class="p-button-warning p-mr-2"></ts-button>
                    <ts-button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" class="p-button-warning p-mr-2"></ts-button>
                    <ts-button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" class="p-button-warning"></ts-button>
                </div>
                <div class="p-col">
                    <ts-button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" class="p-button-success p-mr-2"></ts-button>
                    <ts-button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" class="p-button-success p-mr-2"></ts-button>
                    <ts-button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" class="p-button-success"></ts-button>
                </div>
            </div>
        </div>
        <TsConfirmDialogDoc />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useConfirm } from "primevue/useconfirm";
// import { useToast } from "primevue/usetoast";
import TsConfirmDialogDoc from './tsConfirmDialogDoc.vue'

export default defineComponent({
    components: {
        TsConfirmDialogDoc
    },
    setup() {
        const confirm = useConfirm();
        // const toast = useToast();

        const confirm1 = () => {
            confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    // toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    // toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        const confirm2 = () => {
            confirm.require({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    // toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    // toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        const confirmPosition = (position) => {
            confirm.require({
                group: 'positionDialog',
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                position: position,
                accept: () => {
                    // toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                    // toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

        return { confirm1, confirm2, confirmPosition };
    }
});
</script>