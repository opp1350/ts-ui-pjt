<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TsKnob</h1>
                <p>Knob is a form component to define number inputs with a dial.</p>
            </div>
        </div>
        <div class="content-section implementation">
            <div class="card">
                <div class="p-grid p-formgrid p-text-center">
                    <div class="p-field p-col-12 p-md-4">
                        <h5>Basic</h5>
                        <ts-knob v-model="value1" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <h5>Readonly</h5>
                        <ts-knob v-model="value2" readonly />
                    </div>
                     <div class="p-field p-col-12 p-md-4">
                         <h5>Disabled</h5>
                        <ts-knob v-model="value3" disabled />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <h5 class="p-mt-3">Min/Max</h5>
                        <ts-knob v-model="value4" :min="-50" :max="50" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <h5 class="p-mt-3">Step</h5>
                        <ts-knob v-model="value5" :step="10" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                         <h5 class="p-mt-3">Template</h5>
                        <ts-knob v-model="value6" valueTemplate="{value}%" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <h5 class="p-mt-3">Stroke</h5>
                        <ts-knob v-model="value7" :strokeWidth="5" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <h5 class="p-mt-3">Size</h5>
                        <ts-knob v-model="value8" :size="200"/>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <h5 class="p-mt-3">Color</h5>
                        <ts-knob v-model="value9" valueColor="SlateGray" rangeColor="MediumTurquoise"  />
                    </div>
                </div>
            </div>
        </div>

        <TsKnobDoc />
    </div>
</template>

<script>
import TsKnobDoc from './tsKnobDoc';

export default {
    data() {
        return {
            value1: 0,
            value2: 50,
            value3: 75,
            value4: 10,
            value5: 40,
            value6: 60,
            value7: 40,
            value8: 60,
            value9: 50,
        }
    },
    components: {
        TsKnobDoc
    }
}
</script>