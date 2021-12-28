<template>
    <slot></slot>
</template>

<script>
export default {
    name: 'tsAccordionTab',
    props: {
        header: null,
        disabled: Boolean
    }
}
</script>
