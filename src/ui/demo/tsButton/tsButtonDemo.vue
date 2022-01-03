// tsButton에 대한 Demo 파일
<template>
    <div>
        <h5>Basic</h5>
        <ts-button label="ts-Button" />
        <ts-button label="Disabled" disabled="disabled" />
        <ts-button label="Link" class="p-button-link" />

        <h5>Icons</h5>
        <ts-button icon="pi pi-check" />
        <ts-button label="Submit" icon="pi pi-check" />
        <ts-button label="Submit" icon="pi pi-check" iconPos="right" />

        <h5>Severities</h5>
        <ts-button label="Primary" />
        <ts-button label="Secondary" class="p-button-secondary" />
        <ts-button label="Success" class="p-button-success" />
        <ts-button label="Info" class="p-button-info" />
        <ts-button label="Warning" class="p-button-warning" />
        <ts-button label="Help" class="p-button-help" />
        <ts-button label="Danger" class="p-button-danger" />

        <h5>Raised Buttons</h5>
        <ts-button label="Primary" class="p-button-raised" />
        <ts-button label="Secondary" class="p-button-raised p-button-secondary" />
        <ts-button label="Success" class="p-button-raised p-button-success" />
        <ts-button label="Info" class="p-button-raised p-button-info" />
        <ts-button label="Warning" class="p-button-raised p-button-warning" />
        <ts-button label="Help" class="p-button-raised p-button-help" />
        <ts-button label="Danger" class="p-button-raised p-button-danger" />

        <h5>Rounded Buttons</h5>
        <ts-button label="Primary" class="p-button-rounded" />
        <ts-button label="Secondary" class="p-button-rounded p-button-secondary" />
        <ts-button label="Success" class="p-button-rounded p-button-success" />
        <ts-button label="Info" class="p-button-rounded p-button-info" />
        <ts-button label="Warning" class="p-button-rounded p-button-warning" />
        <ts-button label="Help" class="p-button-rounded p-button-help" />
        <ts-button label="Danger" class="p-button-rounded p-button-danger" />

        <h5>Text Buttons</h5>
        <ts-button label="Primary" class="p-button-text" />
        <ts-button label="Secondary" class="p-button-secondary p-button-text" />
        <ts-button label="Success" class="p-button-success p-button-text" />
        <ts-button label="Info" class="p-button-info p-button-text" />
        <ts-button label="Warning" class="p-button-warning p-button-text" />
        <ts-button label="Help" class="p-button-help p-button-text" />
        <ts-button label="Danger" class="p-button-danger p-button-text" />
        <ts-button label="Plain" class="p-button-text p-button-plain" />

        <h5>Raised Text Buttons</h5>
        <ts-button label="Primary" class="p-button-raised p-button-text" />
        <ts-button label="Secondary" class="p-button-raised p-button-secondary p-button-text" />
        <ts-button label="Success" class="p-button-raised p-button-success p-button-text" />
        <ts-button label="Info" class="p-button-raised p-button-info p-button-text" />
        <ts-button label="Warning" class="p-button-raised p-button-warning p-button-text" />
        <ts-button label="Help" class="p-button-raised p-button-help p-button-text" />
        <ts-button label="Danger" class="p-button-raised p-button-danger p-button-text" />
        <ts-button label="Plain" class="p-button-raised p-button-text p-button-plain" />

        <h5>Outlined Buttons</h5>
        <ts-button label="Primary" class="p-button-outlined" />
        <ts-button label="Secondary" class="p-button-outlined p-button-secondary" />
        <ts-button label="Success" class="p-button-outlined p-button-success" />
        <ts-button label="Info" class="p-button-outlined p-button-info" />
        <ts-button label="Warning" class="p-button-outlined p-button-warning" />
        <ts-button label="Help" class="p-button-outlined p-button-help" />
        <ts-button label="Danger" class="p-button-outlined p-button-danger" />

        <h5>Rounded Icon Buttons</h5>
        <ts-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" />
        <ts-button icon="pi pi-search" class="p-button-rounded p-button-success" />
        <ts-button icon="pi pi-user" class="p-button-rounded p-button-info" />
        <ts-button icon="pi pi-bell" class="p-button-rounded p-button-warning" />
        <ts-button icon="pi pi-heart" class="p-button-rounded p-button-help" />
        <ts-button icon="pi pi-times" class="p-button-rounded p-button-danger" />
        <ts-button icon="pi pi-check" class="p-button-rounded" />

        <h5>Rounded Text Icon Buttons</h5>
        <ts-button icon="pi pi-check" class="p-button-rounded p-button-text" />
        <ts-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" />
        <ts-button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" />
        <ts-button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" />
        <ts-button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" />
        <ts-button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" />
        <ts-button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" />
        <ts-button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" />

        <h5>Rounded and Outlined Icon Buttons</h5>
        <ts-button icon="pi pi-check" class="p-button-rounded p-button-outlined" />
        <ts-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" />
        <ts-button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" />
        <ts-button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" />
        <ts-button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" />
        <ts-button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" />
        <ts-button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" />

        <h5>Badges</h5>
        <ts-button type="button" label="Emails" badge="8" />
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
