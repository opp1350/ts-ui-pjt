<template>
    <ConfirmDialog :group="group"></ConfirmDialog>
</template>

<script>
import ConfirmDialog from 'primevue/confirmdialog'

export default {
    name: 'tsConfirmDialog',
    components: {
        ConfirmDialog
    },
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        }
    }
}

</script>