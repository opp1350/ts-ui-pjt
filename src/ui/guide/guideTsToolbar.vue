<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsToolbar 가이드</a></h2>
        <div>
            <label for="toolbarInput1">basic </label>
            <ts-toolbar>
                <template #start>
                    <ts-button label="New" icon="pi pi-plus" class="p-mr-2" />
                </template>

                <template #end>
                    <ts-button icon="pi pi-search" class="p-mr-2" />
                </template>
            </ts-toolbar>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsToolbar',
    components: {
    }
}
</script>