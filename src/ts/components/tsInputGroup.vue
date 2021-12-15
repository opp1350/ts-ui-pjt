<template>
    <div class="ts-inputgroup">
        <div class="p-inputgroup">
            <span class="p-inputgroup-addon" v-if="prefix">
                <slot name="prefix"></slot>
            </span>
            <slot></slot><!-- input slot -->
            <span class="p-inputgroup-addon" v-if="suffix">
                <slot name="suffix"></slot>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tsInputGroup',
    components: {
    },
    props: {
        prefix: {
            type: Boolean,
            default: false
        },
        suffix: {
            type: Boolean,
            default: false
        }
    }
}
</script>