<template>
    <div>
        <div class="card">
			<h5>1. Default</h5>
            <ts-tabview :tabs="tabs"></ts-tabview>
        </div>
		<div>
			<h5>2. Programmatic</h5>
            <ts-button @click="active1 = 0" label="Activate 1st"></ts-button>
            <ts-button @click="active1 = 1" label="Activate 2nd"></ts-button>
            <ts-button @click="active1 = 2" label="Activate 3rd"></ts-button>
			<ts-tabview :tabs="tabs" v-model:activeIndex="active1"></ts-tabview>
		</div>
		<div>
			<h5>3. Disabled</h5>
			<ts-tabview :tabs="tabs1"></ts-tabview>
		</div>
		<div>
			<h5>4. Custom Headers</h5>
            <ts-tabview class="tabview-custom" :tabs="tabs3" :cusHeader="true"></ts-tabview>
		</div>
		<div>
			<h5>5. Scrollable</h5>
			<div>
				<ts-button @click="active2 = 0" label="Activate 1st"></ts-button>
				<ts-button @click="active2 = 29" label="Activate 30th"></ts-button>
				<ts-button @click="active2 = 49" label="Activate 50th"></ts-button>
			</div>
			<ts-tabview :tabs="tabs2" v-model:activeIndex="active2" :scrollable="true">
			</ts-tabview>
		</div>
        <TsTabViewDoc />
    </div>
</template>

<script>
import { ref } from 'vue'
import TsTabViewDoc from './tsTabViewDoc.vue'
export default {
    components: {
      TsTabViewDoc,
    },
    setup() {
		const active1 = ref(0)
        const active2 = ref(0)
        const tabs = ref([
            {
                title: 'Header I',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            }
        ]);
		const tabs1 = ref([
            {
                title: 'Header I',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
				disabled: true

            }
        ]);
		const tabs2 = ref(Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` })));
        const tabs3 = ref([
            {
                title: 'Header I',
                headerClass: 'pi pi-calendar',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: 'Header II',
                headerClass: 'pi pi-user',
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."
            },
            {
                title: 'Header III',
                headerClass: 'pi pi-search',
                content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            }
        ]);
        return {
            active1,active2,tabs,tabs1,tabs2,tabs3
        }
    },
}
</script>

<style lang="scss" scoped>
.p-button {
    margin-right: .5rem;
    margin-top: 1rem;
}

.tabview-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-tabview p {
    line-height: 1.5;
    margin: 0;
}
</style>
