<template>
	<div>
        <div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable</h1>
				<p>DataTable displays data in tabular format.</p>
			</div>
		</div>
        <div class="content-section implementation">
            <!-- <div class="card">
                <ts-data-table :value="products" responsiveLayout="scroll">
                    <ts-column field="code" header="Code"></ts-column>
                    <ts-column field="name" header="Name"></ts-column>
                    <ts-column field="category" header="Category"></ts-column>
                    <ts-column field="quantity" header="Quantity"></ts-column>
                </ts-data-table>
            </div> -->
            <h2>Basic</h2>
            <div>
                <ts-data-table responsiveLayout="scroll" removableSort v-model:selection="selectedProducts3" dataKey="id"
                    :value="customers" :paginator="true" :rows="10"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    :rowsPerPageOptions="[10,20,50]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                    <ts-column selectionMode="multiple" headerStyle="width: 3em"></ts-column>
                    <ts-column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" :sortable="true"></ts-column>
                    <template #paginatorstart>
                        <ts-button type="button" icon="pi pi-refresh" class="p-button-text" />
                    </template>
                    <template #paginatorend>
                        <ts-button type="button" icon="pi pi-cloud" class="p-button-text" />
                    </template>
                </ts-data-table>
            </div>
            <div>
                <h2>Scroll Pagination</h2>
                <ts-data-table 
                    :value="customers" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
                    <ts-column field="name" header="Name" style="min-width: '200px'">
                    <template #loading>
                        <div class="p-d-flex p-ai-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                    </ts-column>
                    <ts-column field="country.name" header="Country" style="min-width: '200px'">
                        <template #loading>
                            <div class="p-d-flex p-ai-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <Skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </ts-column>
                    <ts-column field="company" header="Company" style="min-width: '200px'">
                        <template #loading>
                            <div class="p-d-flex p-ai-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <Skeleton width="30%" height="1rem" />
                            </div>
                        </template>
                    </ts-column>
                    <ts-column field="representative.name" header="Representative" style="min-width: '200px'">
                        <template #loading>
                            <div class="p-d-flex p-ai-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                                <Skeleton width="40%" height="1rem" />
                            </div>
                        </template>
                    </ts-column>
<!--                     
                    <ts-column field="name" header="Name"></ts-column>
                    <ts-column field="country.name" header="Country"></ts-column>
                    <ts-column field="company" header="Company"></ts-column>
                    <ts-column field="representative.name" header="Representative"></ts-column>
                    <template #paginatorstart>
                        <ts-button type="button" icon="pi pi-refresh" class="p-button-text" />
                    </template>
                    <template #paginatorend>
                        <ts-button type="button" icon="pi pi-cloud" class="p-button-text" />
                    </template> -->
                </ts-data-table>
            </div>
        </div>
	</div>
</template>

<script>
import { ref } from 'vue';
import Skeleton from 'primevue/skeleton';
import productData from '@/assets/data/products-small.json';
import customerData from '@/assets/data/customers-large.json';

export default {
    components: {
        Skeleton
    },
    setup() {

        const products = ref([...productData.data]);
        const selectedProducts3 = ref();
        const columns = ref([
            {field: 'name', header: 'Name'},
            {field: 'country.name', header: 'Country'},
            {field: 'company', header: 'Company'},
            {field: 'representative.name', header: 'Representative'}
        ]);

        const customers = ref([...customerData.data]);
        // const customerService = ref(new CustomerService());
        const lazyLoading = ref(false);
        const loadLazyTimeout = ref();

        const loadCarsLazy = (event) => {
            !lazyLoading.value && (lazyLoading.value = true);

            if (loadLazyTimeout.value) {
                clearTimeout(loadLazyTimeout.value);
            }

            //simulate remote connection with a timeout
            loadLazyTimeout.value = setTimeout(() => {
                let _virtualCars = [...customers.value];
                let { first, last } = event;

                //load data of required page
                const loadedCars = customers.value.slice(first, last);

                //populate page of virtual cars
                Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

                customers.value = _virtualCars;
                lazyLoading.value = false;
            }, Math.random() * 1000 + 250);
        }

        return { products, columns, selectedProducts3, customers, lazyLoading, loadCarsLazy }
    }
}
</script>         