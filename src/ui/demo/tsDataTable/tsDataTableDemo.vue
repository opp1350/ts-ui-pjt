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
                <ts-data-table :value="customers" :paginator="true" :rows="10"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                    <ts-column field="name" header="Name"></ts-column>
                    <ts-column field="country.name" header="Country"></ts-column>
                    <ts-column field="company" header="Company"></ts-column>
                    <ts-column field="representative.name" header="Representative"></ts-column>
                    <template #paginatorstart>
                        <ts-button type="button" icon="pi pi-refresh" class="p-button-text" />
                    </template>
                    <template #paginatorend>
                        <ts-button type="button" icon="pi pi-cloud" class="p-button-text" />
                    </template>
                </ts-data-table>
            </div>
        </div>
	</div>
</template>

<script>
import { ref } from 'vue';
import productData from '@/assets/data/products-small.json';
import customerData from '@/assets/data/customers-large.json';

export default {
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

        return { products, columns, selectedProducts3, customers }
    }
}
</script>         