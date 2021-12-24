<template>
    <InputMask
        :modelValue="modelValue"
        :mask="mask"
        :slotChar="slotChar"
        :autoClear="autoClear"
        :unmask="unmask"
        @update:modelValue="$emit('update:modelValue', $event)"
        class="ts-input-mask"
    />
</template>
<script>
import InputMask from 'primevue/inputmask';
export default {
    name: 'tsInputMask',
    components: {
        InputMask
    },
    props: {
        modelValue: null,
        mask: null,
        slotChar: null,
        autoClear: {
            type: Boolean,
            default: true
        },
        unmask: {
            type: Boolean,
            default: false
        }
    },
    emits: ["update:modelValue"],
    setup() {
        
    },
}
</script>
