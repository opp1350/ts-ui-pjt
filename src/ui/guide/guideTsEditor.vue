<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsEditor 가이드</a></h2>
        <div>
            <label for="editorInput1">basic(Quill 기반) </label><br>
            * quill install 시 push할 파일이 늘어나 main.js에서 editor 컴포넌트를 주석처리해 두었습니다.
            <ts-editor />
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsEditor',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
        }
    },
    methods: {
    }
}
</script>