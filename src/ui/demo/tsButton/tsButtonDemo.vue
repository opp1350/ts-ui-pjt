// tsButton에 대한 Demo 파일
<template>
    <div>
        <h5>Basic</h5>
        <ts-button label="ts-Button" />
        <ts-button label="Disabled" disabled="disabled" />

        <h5>Link</h5>
        <ts-button label="Link" link />
        <ts-button label="Link" link class="ts-button-success" />

        <h5>Icons</h5>
        <ts-button icon="pi pi-check" />
        <ts-button label="Submit" icon="pi pi-check" />
        <ts-button label="Submit" icon="pi pi-check" iconPos="right" />

        <h5>Severities</h5>
        <ts-button label="primary-dark" class="ts-button-primary-dark" />
        <ts-button label="Primary" />
        <ts-button label="Secondary" class="ts-button-secondary" />
        <ts-button label="Success" class="ts-button-success" />
        <ts-button label="Info" class="ts-button-info" />
        <ts-button label="Warning" class="ts-button-warning" />
        <ts-button label="danger" class="ts-button-danger" />

        <h5>Raised Buttons</h5>
        <ts-button label="Primary"/>
        <ts-button label="Secondary" raised class="ts-button-secondary" />
        <ts-button label="Success" raised class="ts-button-success" />
        <ts-button label="Info" raised class="ts-button-info" />
        <ts-button label="Warning" raised class="ts-button-warning" />
        <ts-button label="danger" raised class="ts-button-danger" />

        <h5>Rounded Buttons</h5>
        <ts-button label="Primary" rounded />
        <ts-button label="Secondary" rounded class="p-button-secondary" />
        <ts-button label="Success" rounded class="p-button-success" />
        <ts-button label="Info" rounded class="p-button-info" />
        <ts-button label="Warning" rounded class="p-button-warning" />
        <ts-button label="danger" rounded class="p-button-danger" />
        

        <h5>Text Buttons</h5>
        <ts-button label="Primary" text />
        <ts-button label="Secondary" text class="p-button-secondary" />
        <ts-button label="Success" text class="p-button-success" />
        <ts-button label="Info" text class="p-button-info" />
        <ts-button label="Warning" text class="p-button-warning" />
        <ts-button label="Danger" text class="p-button-danger" />
        <ts-button label="Plain" text class="p-button-plain" />

        <h5>Raised Text Buttons</h5>
        <ts-button label="Primary" raised text />
        <ts-button label="Secondary" raised text class="p-button-secondary" />
        <ts-button label="Success" raised text class="p-button-success" />
        <ts-button label="Info" raised text class="p-button-info" />
        <ts-button label="Warning" raised text class="p-button-warning" />
        <ts-button label="Danger" raised text class="p-button-danger" />
        <ts-button label="Plain" raised text class="p-button-plain" />

        <h5>Outlined Buttons</h5>
        <ts-button label="Primary" outlined />
        <ts-button label="Secondary" outlined class="p-button-secondary" />
        <ts-button label="Success" outlined class="p-button-success" />
        <ts-button label="Info" outlined class="p-button-info" />
        <ts-button label="Warning" outlined class="p-button-warning" />
        <ts-button label="Danger" outlined class="p-button-danger" />

        <h5>Rounded Icon Buttons</h5>
        <ts-button icon="pi pi-bookmark" rounded class="p-button-secondary" />
        <ts-button icon="pi pi-search" rounded class="p-button-success" />
        <ts-button icon="pi pi-user" rounded class="p-button-info" />
        <ts-button icon="pi pi-bell" rounded class="p-button-warning" />
        <ts-button icon="pi pi-times" rounded class="p-button-danger" />
        <ts-button icon="pi pi-check" rounded />

        <h5>Rounded Text Icon Buttons</h5>
        <ts-button icon="pi pi-check" rounded text class="p-button-text" />
        <ts-button icon="pi pi-bookmark" rounded text class="p-button-secondary" />
        <ts-button icon="pi pi-search" rounded text class="p-button-success" />
        <ts-button icon="pi pi-user" rounded text class="p-button-info" />
        <ts-button icon="pi pi-bell" rounded text class="p-button-warning" />
        <ts-button icon="pi pi-times" rounded text class="p-button-danger" />
        <ts-button icon="pi pi-filter" rounded text class= "p-button-plain" />

        <h5>Rounded and Outlined Icon Buttons</h5>
        <ts-button icon="pi pi-check" rounded outlined />
        <ts-button icon="pi pi-bookmark" rounded outlined class="p-button-secondary" />
        <ts-button icon="pi pi-search" rounded outlined class="p-button-success" />
        <ts-button icon="pi pi-user" rounded outlined class="p-button-info" />
        <ts-button icon="pi pi-bell" rounded outlined class="p-button-warning" />
        <ts-button icon="pi pi-times" rounded outlined class="p-button-danger" />

        <h5>Badges</h5>
        <ts-button type="button" label="Emails" badge="9999" />
        <ts-button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

        <h5>Loading</h5>
        <ts-button type="button" label="Search" icon="pi pi-search" :loading="loading[0]" @click="load(0)" />
        <ts-button type="button" label="Search" icon="pi pi-search" iconPos="right" :loading="loading[1]" @click="load(1)"  />
        <ts-button type="button" icon="pi pi-search" :loading="loading[2]" @click="load(2)" />
        <ts-button type="button" label="Search" :loading="loading[3]" @click="load(3)" />

        <h5>Templating</h5>
        <ts-button type="button" class="p-px-3">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem"/>
        </ts-button>
        <ts-button type="button" class="p-button-outlined p-button-success">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem" />
            <span class="p-ml-2 p-text-bold">PrimeVue</span>
        </ts-button>

        <h5>Button Set</h5>
        <span class="p-buttonset">
            <ts-button label="Save" icon="pi pi-check" />
            <ts-button label="Delete" icon="pi pi-trash" />
            <ts-button label="Cancel" icon="pi pi-times" />
        </span>

        <h5>Sizes</h5>
        <div class="sizes">
            <ts-button label="Small" icon="pi pi-check" class="p-button-sm"  />
            <ts-button label="Normal" icon="pi pi-check" class="p-button"  />
            <ts-button label="Large" icon="pi pi-check" class="p-button-lg" />
        </div>

        <TsButtonDoc />
    </div>
</template>

<script>
import { ref } from 'vue';
import TsButtonDoc from './tsButtonDoc.vue'
export default {
    components: {
        TsButtonDoc
    },
    setup() {
        const loading = ref([false, false, false]);
        const load = (index) => {
            loading.value[index] = true;
            setTimeout(() => loading.value[index] = false, 1000);
        }

        return {loading, load};
    }
}
</script>

<style lang="scss" scoped>
.p-button {
    margin-right: .5rem;
}

.p-buttonset {
    .p-button {
        margin-right: 0;
    }
}

.sizes {
    .button {
        margin-bottom: .5rem;
        display: block;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

@media screen and (max-width: 640px) {
    .p-button {
        margin-bottom: .5rem;

        &:not(.p-button-icon-only) {
            display: flex;
            width: 100%;
        }
    }

    .p-buttonset {
        .p-button {
            margin-bottom: 0;
        }
    }
}
</style>
