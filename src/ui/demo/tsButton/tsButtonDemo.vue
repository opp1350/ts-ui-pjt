// tsButton에 대한 Demo 파일
<template>
    <div>
        tsButtonDemo입니당
        <ts-button :label="label"></ts-button>
        <ts-checkbox></ts-checkbox>
    </div>
</template>

<script>
export default {
    components: {
    },
    setup() {
        const label = 'tsButton'
        return {
            label
        }
    },
}
</script>
