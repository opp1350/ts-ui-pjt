<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsDialog</h1>
                <p>Dialog is a container to display content in an overlay window.</p>
            </div>
        </div>
        <div>
            <h5>Basic</h5>
            <ts-button label="Show" icon="pi pi-external-link" @click="openBasic" />
            <ts-dialog header="Header" v-model:visible="displayBasic" :style="{width: '50vw'}">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <ts-button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
                    <ts-button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
                </template>
            </ts-dialog>

            <ts-button label="Long Content" icon="pi pi-external-link" @click="openBasic2" />
            <ts-dialog header="Header" v-model:visible="displayBasic2" :style="{width: '50vw'}">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                    quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                <template #footer>
                    <ts-button label="No" icon="pi pi-times" @click="closeBasic2" class="p-button-text"/>
                    <ts-button label="Yes" icon="pi pi-check" @click="closeBasic2" autofocus />
                </template>
            </ts-dialog>

            <h5>Modal</h5>
            <ts-button label="Show" icon="pi pi-external-link" @click="openModal" />
            <ts-dialog header="Header" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
                <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <ts-button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                    <ts-button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
                </template>
            </ts-dialog>

            <h5>Responsive</h5>
            <ts-button label="Show" icon="pi pi-external-link" @click="openResponsive" />
            <ts-dialog header="Header" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <ts-button label="No" icon="pi pi-times" @click="closeResponsive" class="p-button-text"/>
                    <ts-button label="Yes" icon="pi pi-check" @click="closeResponsive" autofocus />
                </template>
            </ts-dialog>

            <h5>Confirmation</h5>
            <ts-button label="Confirm" icon="pi pi-external-link" @click="openConfirmation" />
            <ts-dialog header="Confirmation" v-model:visible="displayConfirmation" :style="{width: '350px'}" :modal="true">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                    <span>Are you sure you want to proceed?</span>
                </div>
                <template #footer>
                    <ts-button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text"/>
                    <ts-button label="Yes" icon="pi pi-check" @click="closeConfirmation" class="p-button-text" autofocus />
                </template>
            </ts-dialog>

            <h5>Maximizable</h5>
            <ts-button label="Show" icon="pi pi-external-link" @click="openMaximizable" />
            <ts-dialog header="Header" v-model:visible="displayMaximizable" :style="{width: '50vw'}" :maximizable="true" :modal="true">
                <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <ts-button label="No" icon="pi pi-times" @click="closeMaximizable" class="p-button-text"/>
                    <ts-button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus />
                </template>
            </ts-dialog>

            <h5>Position</h5>
            <div class="p-grid p-dir-col">
                <div class="p-col">
                    <ts-button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="p-button-warning" />
                    <ts-button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="p-button-warning" />
                </div>
                <div class="p-col">
                    <ts-button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="p-button-warning" />
                    <ts-button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" class="p-button-warning" />
                    <ts-button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" class="p-button-warning" />
                </div>
                <div class="p-col">
                    <ts-button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="p-button-warning" />
                    <ts-button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" class="p-button-warning" />
                    <ts-button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" class="p-button-warning" />
                </div>
            </div>

            <ts-dialog header="Header" v-model:visible="displayPosition" :style="{width: '50vw'}" :position="position" :modal="true">
                <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <template #footer>
                    <ts-button label="No" icon="pi pi-times" @click="closePosition" class="p-button-text" />
                    <ts-button label="Yes" icon="pi pi-check" @click="closePosition" autofocus />
                </template>
            </ts-dialog>
        </div>
        <TsDialogDoc />
    </div>
</template>

<script>
import { ref } from 'vue'
import TsDialogDoc from './tsDialogDoc.vue'

export default {
    components: {
        TsDialogDoc
    },
    setup() {
        const displayBasic = ref(false);
        const displayBasic2 = ref(false);
        const displayModal = ref(false);
        const displayResponsive = ref(false);
        const displayConfirmation = ref(false);
        const displayMaximizable = ref(false);
        const displayPosition = ref(false);
        const position = ref('center');

        const openBasic = () => {
            displayBasic.value = true;
        };
        const closeBasic = () => {
            displayBasic.value = false;
        };
        const openBasic2 = () => {
            displayBasic2.value = true;
        };
        const closeBasic2 = () => {
            displayBasic2.value = false;
        };
        const openResponsive = () => {
            displayResponsive.value = true;
        };
        const closeResponsive = () => {
            displayResponsive.value = false;
        };
        const openModal = () => {
            displayModal.value = true;
        };
        const closeModal = () => {
            displayModal.value = false;
        }
        const openConfirmation = () => {
            displayConfirmation.value = true;
        };
        const closeConfirmation = () => {
            displayConfirmation.value = false;
        };
        const openMaximizable = () => {
            displayMaximizable.value = true;
        };
        const closeMaximizable = () => {
            displayMaximizable.value = false;
        };
        const openPosition = (pos) => {
            position.value = pos;
            displayPosition.value = true;
        };
        const closePosition = () => {
            displayPosition.value = false;
        };

        return { displayBasic, displayBasic2, displayModal, displayResponsive, displayConfirmation, displayMaximizable,
            displayPosition, position, openBasic, openBasic2, closeBasic, closeBasic2, openResponsive, closeResponsive,
            openModal, closeModal, openConfirmation, closeConfirmation, openMaximizable, closeMaximizable, openPosition, closePosition}
    }
}
</script>

<style scoped lang="scss">
.p-button {
    margin: 0.3rem .5rem;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}
</style>