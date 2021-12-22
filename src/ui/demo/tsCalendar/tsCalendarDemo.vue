<template>
    <div>
        <h5>Popup</h5>
        <div class="p-fluid p-grid p-formgrid">
            <div class="p-field p-col-12 p-md-4">
                <label for="basic">Basic</label>
                <ts-calendar id="basic" v-model="date1" autocomplete="off"></ts-calendar>
            </div>
            <div class="p-field p-col-12 p-md-4">
                <label for="dateformat">DateFormat</label>
                <ts-calendar id="dateformat" v-model="date2" date-format="yy-mm-dd"></ts-calendar>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const date1 = ref();
        const date2 = ref();
        return {
            date1,
            date2
        }
    }
}
</script>