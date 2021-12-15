<template>
    <div>
        <Menu :model="items" />
        <PanelMenu :model="items" />
    </div>
</template>

<script>
import Menu from 'primevue/menu';
import PanelMenu from 'primevue/panelmenu';
export default {
    components: {
        Menu,
        PanelMenu
    },
    data() {
        return {
            items: [
                {
                    label: 'Components',
                    items: [{label: 'tsInput', to: 'tsInput' },
                            {label: 'tsRadio', to: 'tsRadio' }]
                },
                {
                    label: 'Template Pages',
                    items: [{label: '기본페이지', to: ''},
                            {label: '팝업페이지', to: ''} ]
                }
            ]
        }
    },
    methods: {
    }
}
</script>