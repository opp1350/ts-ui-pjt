// tsButton에 대한 Demo 파일
<template>
    <div>
        <h5>Basic</h5>
        <ts-button label="ts-Button" />
        <ts-button label="Disabled" disabled="disabled" />

        <h5>Link</h5>
        <ts-button label="Link" link />
        <ts-button label="Link" link color="success" />

        <h5>Icons</h5>
        <ts-button icon="pi pi-check" />
        <ts-button label="Submit" icon="pi pi-check" />
        <ts-button label="Submit" icon="pi pi-check" iconPos="right" />

        <h5>Severities</h5>
        <ts-button label="primary-dark" color="primary-dark" />
        <ts-button label="Primary" />
        <ts-button label="Secondary" color="secondary" />
        <ts-button label="Success" color="success" />
        <ts-button label="Info" color="info" />
        <ts-button label="Warning" color="warning" />
        <ts-button label="danger" color="danger" />
        <ts-button label="gray" color="gray" />

        <h5>Raised Buttons</h5>
        <ts-button label="Primary"/>
        <ts-button label="Secondary" raised color="secondary" />
        <ts-button label="Success" raised color="success" />
        <ts-button label="Info" raised color="info" />
        <ts-button label="Warning" raised color="warning" />
        <ts-button label="danger" raised color="danger" />
        <ts-button label="gray" raised color="gray" />

        <h5>Rounded Buttons</h5>
        <ts-button label="Primary" rounded />
        <ts-button label="Secondary" rounded color="secondary" />
        <ts-button label="Success" rounded color="success" />
        <ts-button label="Info" rounded color="info" />
        <ts-button label="Warning" rounded color="warning" />
        <ts-button label="danger" rounded color="danger" />
        <ts-button label="gray" rounded color="gray" />
        

        <h5>Text Buttons</h5>
        <ts-button label="Primary" text />
        <ts-button label="Secondary" text color="secondary" />
        <ts-button label="Success" text color="success" />
        <ts-button label="Info" text color="info" />
        <ts-button label="Warning" text color="warning" />
        <ts-button label="Danger" text color="danger" />
        <ts-button label="gray" text color="gray" />

        <h5>Raised Text Buttons</h5>
        <ts-button label="Primary" raised text />
        <ts-button label="Secondary" raised text color="secondary" />
        <ts-button label="Success" raised text color="success" />
        <ts-button label="Info" raised text color="info" />
        <ts-button label="Warning" raised text color="warning" />
        <ts-button label="Danger" raised text color="danger" />
        <ts-button label="gray" raised text color="gray" />

        <h5>Outlined Buttons</h5>
        <ts-button label="Primary" outlined />
        <ts-button label="Secondary" outlined color="secondary" />
        <ts-button label="Success" outlined color="success" />
        <ts-button label="Info" outlined color="info" />
        <ts-button label="Warning" outlined color="warning" />
        <ts-button label="Danger" outlined color="danger" />
        <ts-button label="gray" outlined color="gray" />

        <h5>Rounded Icon Buttons</h5>
        <ts-button icon="pi pi-bookmark" rounded color="secondary" />
        <ts-button icon="pi pi-search" rounded color="success" />
        <ts-button icon="pi pi-user" rounded color="info" />
        <ts-button icon="pi pi-bell" rounded color="warning" />
        <ts-button icon="pi pi-times" rounded color="danger" />
        <ts-button icon="pi pi-check" rounded />

        <h5>Rounded Text Icon Buttons</h5>
        <ts-button icon="pi pi-check" rounded text color="text" />
        <ts-button icon="pi pi-bookmark" rounded text color="secondary" />
        <ts-button icon="pi pi-search" rounded text color="success" />
        <ts-button icon="pi pi-user" rounded text color="info" />
        <ts-button icon="pi pi-bell" rounded text color="warning" />
        <ts-button icon="pi pi-times" rounded text color="danger" />
        <ts-button icon="pi pi-filter" rounded text color= "plain" />

        <h5>Rounded and Outlined Icon Buttons</h5>
        <ts-button icon="pi pi-check" rounded outlined />
        <ts-button icon="pi pi-bookmark" rounded outlined color="secondary" />
        <ts-button icon="pi pi-search" rounded outlined color="success" />
        <ts-button icon="pi pi-user" rounded outlined color="info" />
        <ts-button icon="pi pi-bell" rounded outlined color="warning" />
        <ts-button icon="pi pi-times" rounded outlined color="danger" />

        <h5>Badges</h5>
        <ts-button type="button" label="Emails" badge="9999" />
        <ts-button type="button" label="Messages" icon="pi pi-users" color="warning" badge="8" badgeClass="p-badge-danger" />

        <h5>Loading</h5>
        <ts-button type="button" label="Search" icon="pi pi-search" :loading="loading[0]" @click="load(0)" />
        <ts-button type="button" label="Search" icon="pi pi-search" iconPos="right" :loading="loading[1]" @click="load(1)"  />
        <ts-button type="button" icon="pi pi-search" :loading="loading[2]" @click="load(2)" />
        <ts-button type="button" label="Search" :loading="loading[3]" @click="load(3)" />

        <h5>Templating</h5>
        <ts-button type="button" class="p-px-3">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem"/>
        </ts-button>
        <ts-button type="button" outlined color="success">
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
            <ts-button label="Small" icon="pi pi-check" size="small"  />
            <ts-button label="Normal" icon="pi pi-check" />
            <ts-button label="Large" icon="pi pi-check" size="large" />
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
