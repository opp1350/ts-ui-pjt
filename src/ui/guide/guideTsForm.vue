<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsAutoComplete 가이드</a></h2>
        항목 예시: item #0
        <div>
            <label for="autoComplete1">basic </label>
            <ts-auto-complete v-model="autoComplete_val1" :suggestions="filteredItems" @complete="searchItems" />
        </div>
        <div>
            <label for="autoComplete2">dropdown </label>
            <ts-auto-complete v-model="autoComplete_val2" :suggestions="filteredItems" @complete="searchItems" dropdown/>
        </div>
        <div>
            <!--suggestions 리스트에서 여러 항목 선택 가능-->
            <label for="autoComplete2">multiple </label>
            <ts-auto-complete v-model="autoComplete_val3" :suggestions="filteredItems" @complete="searchItems" multiple/>
        </div>
        <div>
            <!--suggestions 리스트에서 선택하지 않을 시 인풋 초기화-->
            <label for="autoComplete2">force selection </label>
            <ts-auto-complete v-model="autoComplete_val4" :suggestions="filteredItems" @complete="searchItems" dropdown forceSelection />
        </div>
        항목 예시: Berlin
        <div>
            <label for="autoComplete1">Grouped </label>
            <ts-auto-complete v-model="autoComplete_val5" :suggestions="filteredCities" @complete="searchCity($event)" field="label" optionGroupLabel="label" optionGroupChildren="items">
                <!--Templating-->
                <!-- <template #item="slotProps">
                    <div>
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="18" />
                        <div>{{slotProps.item.name}}</div>
                    </div>
                </template> -->
            </ts-auto-complete>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsChips 가이드</a></h2>
        <div>
            <label for="chipInput1">basic </label>
            <ts-chips v-model="chips_val1"/>
        </div>
        <div>
            <label for="chipInput2">다른 구분자(예시: ,) </label>
            <ts-chips v-model="chips_val2" separator=","/>
        </div>
        <div>
            <!-- <label for="chipInput3">Templating</label>
            <ts-chips v-model="chips_val3">
                <template #chip="slotProps">
                    <div>
                        <span>{{slotProps.value}} - (active) </span>
                    </div>
                </template>
            </ts-chips> -->
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsCalendar 가이드</a></h2>
        <div>
            <label for="calendarInput1">basic </label>
            <ts-calendar v-model="calendar_val1"/>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsCascadeSelect 가이드</a></h2>
        <div>
            <label for="cascadeSelectInput1">basic </label>
            <ts-cascade-select v-model="cascadeSelect_val1"/>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsColorPicker 가이드</a></h2>
        <div>
            <label for="colorPickerInput1">basic </label>
            <ts-color-picker />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsDropdown 가이드</a></h2>
        <div>
            <label for="dropdownInput1">basic </label>
            <ts-dropdown />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsEditor 가이드</a></h2>
        <div>
            <label for="editorInput1">basic(Quill 기반) </label><br>
            * quill install 시 push할 파일이 늘어나 main.js에서 editor 컴포넌트를 주석처리해 두었습니다.
            <ts-editor />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsKnob 가이드</a></h2>
        <div>
            <label for="knobInput1">basic </label>
            <ts-knob />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsListbox 가이드</a></h2>
        <div>
            <label for="listboxInput1">basic </label>
            <ts-listbox v-model="listbox_val1" :options="listbox_options" optionLabel="name"/>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsMultiSelect 가이드</a></h2>
        <div>
            <label for="multiSelectInput1">basic </label>
            <ts-multi-select v-model="multiSelect_val1" :options="listbox_options" optionLabel="name"/>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsPassword 가이드</a></h2>
        <div>
            <label for="passwordInput1">basic </label>
            <ts-password />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsRadioButton 가이드</a></h2>
        <div>
            <label for="radioButtonInput1">basic </label>
            <ts-radio-button v-model="radioButton_val1" value="0"/>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsRating 가이드</a></h2>
        <div>
            <label for="ratingInput1">basic </label>
            <ts-rating />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsSelectButton 가이드</a></h2>
        <div>
            <label for="selectButtonInput1">basic </label>
            <ts-select-button v-model="selectButton_val1" :options="listbox_options" optionLabel="name"/>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsSlider 가이드</a></h2>
        <div>
            <label for="sliderInput1">basic </label>
            <ts-slider v-model="slider_val1"/>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsTextarea 가이드</a></h2>
        <div>
            <label for="textareaInput1">basic </label>
            <ts-textarea />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsToggleButton 가이드</a></h2>
        <div>
            <label for="toggleButtonInput1">basic </label>
            <ts-toggle-button onLabel="button on" offLabel="button off"/>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsTreeSelect 가이드</a></h2>
        <div>
            <label for="treeSelectInput1">basic </label>
            <ts-tree-select />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsTriStateCheckbox 가이드</a></h2>
        <div>
            <label for="triStateCheckboxInput1">basic </label>
            <ts-tri-state-checkbox v-model="triStateCheckbox_val1" />
        </div>
    </div>
</template>
<script>
import {FilterService,FilterMatchMode} from 'primevue/api';

export default {
    name: 'GuideTsForm',
    components: {
    },
    data() {
        return{
            // 화면 필드 영역 데이터
            autoComplete_val1: null,
            autoComplete_val2: '',
            autoComplete_val3: [],
            autoComplete_val4: '',
            autoComplete_val5: '',
            chips_val1: [],
            chips_val2: [],
            chips_val3: [],
            calendar_val1: '',
            cascadeSelect_val1: '',
            listbox_val1: '',
            multiSelect_val1: '',
            radioButton_val1: '',
            selectButton_val1: '',
            slider_val1: 0,
            triStateCheckbox_val1: null,
            // suggestions 아이템 데이터
            filteredCities: null,
            filteredItems: null,
            groupedCities: [{
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            }],
            items: Array.from({ length: 10 }, (_, i) => ({ label: `Item #${i}`, value: i })),
            listbox_options: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
            ]
        }
    },
    methods: {
        searchCity(event) {
            let query = event.query;
            let filteredCities = [];

            for (let country of this.groupedCities) {
                let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
                if (filteredItems && filteredItems.length) {
                    filteredCities.push({...country, ...{items: filteredItems}});
                }
            }

            this.filteredCities = filteredCities;
        },
        searchItems(event) {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let filteredItems = [];

            for(let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    filteredItems.push(item.label.toLowerCase());
                }
            }

            this.filteredItems = filteredItems;
        }
    }
}
</script>