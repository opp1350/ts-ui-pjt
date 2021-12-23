<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsDeferredContent 가이드</a></h2>
        <div>
            <label for="deferredContentInput1">basic </label>
            <ts-deferred-content>
                DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.
            </ts-deferred-content>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsDeferredContent',
    components: {
    }
}
</script>