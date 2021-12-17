<template>
    <div>
        <h2 class="guide-title"><a href="javascript:void(0);">tsAccordion 가이드</a></h2>
        <div>
            <label for="accordionInput1">basic </label>
            <!--에러 발생으로 주석 처리함(this.$slots.default is not a function) -->
            <!-- <ts-accordion>
                <ts-accordion-tab header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </ts-accordion-tab>
            </ts-accordion> -->
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsCard 가이드</a></h2>
        <div>
            <label for="cardInput1">basic </label>
            <ts-card>
                <template #header>
                    <img alt="user header" src="demo/images/usercard.png">
                </template>
                <template #title>
                    Advanced Card
                </template>
                <template #content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </template>
                <template #footer>
                    footer
                </template>
            </ts-card>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsDeferredContent 가이드</a></h2>
        <div>
            <label for="deferredContentInput1">basic </label>
            <ts-deferred-content>
                DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.
            </ts-deferred-content>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsDivider 가이드</a></h2>
        <div>
            <label for="dividerInput1">basic </label>
            <ts-divider />
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsFieldset 가이드</a></h2>
        <div>
            <label for="fieldsetInput1">basic </label>
            <ts-fieldset legend="Header">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ts-fieldset>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsPanel 가이드</a></h2>
        <div>
            <label for="panelInput1">basic </label>
            <ts-panel header="Header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ts-panel>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsSplitter 가이드</a></h2>
        <div>
            <label for="splitterInput1">basic </label>
            <!--에러 발생으로 주석 처리함(this.$slots.default is not a function) -->
            <!-- <ts-splitter style="height: 300px" >
                <ts-splitter-panel>
                    Panel 1 
                </ts-splitter-panel>
            </ts-splitter> -->
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsScrollPanel 가이드</a></h2>
        <div>
            <label for="scrollPanelInput1">basic </label>
            <ts-scroll-panel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ts-scroll-panel>
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsTabView 가이드</a></h2>
        <div>
            <label for="tabViewInput1">basic </label>
            <!--에러 발생으로 주석 처리함(this.$slots.default is not a function) -->
            <!-- <ts-tab-view>
                <ts-tab-panel header="Header I">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </ts-tab-panel>
            </ts-tab-view> -->
        </div>
        <br>
        <h2 class="guide-title"><a href="javascript:void(0);">tsToolbar 가이드</a></h2>
        <div>
            <label for="toolbarInput1">basic </label>
            <ts-toolbar>
                <template #start>
                    <ts-button label="New" icon="pi pi-plus" class="p-mr-2" />
                </template>

                <template #end>
                    <ts-button icon="pi pi-search" class="p-mr-2" />
                </template>
            </ts-toolbar>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuideTsPanel',
    components: {
    }
}
</script>