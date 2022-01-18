<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsRating</h1>
                <p>Rating component is a star based selection input.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic {{val1}}</h5>
                <ts-rating v-model="val1" />

                <h5>Without Cancel</h5>
                <ts-rating v-model="val2" :cancel="false" />

                <h5>ReadOnly</h5>
                <ts-rating :modelValue="5" :readonly="true" :stars="10" :cancel="false" />

                <h5>Disabled</h5>
                <ts-rating :modelValue="8" :disabled="true" :stars="10" />
            </div>
        </div>

        <TsRatingDoc/>
    </div>
</template>

<script>
import TsRatingDoc from './tsRatingDoc';

export default {
    data() {
        return {
            val1: null,
            val2: 3,
        }
    },
    components: {
        TsRatingDoc
    }
}
</script>