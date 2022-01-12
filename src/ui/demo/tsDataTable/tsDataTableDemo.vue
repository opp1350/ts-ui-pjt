<template>
	<div>
        <div class="content-section introduction">
			<div class="feature-intro">
				<h1>DataTable</h1>
				<p>DataTable displays data in tabular format.</p>
			</div>
		</div>
        <div class="content-section implementation">
            <div class="card">
                <ts-data-table :value="products" responsiveLayout="scroll">
                    <ts-column field="code" header="Code"></ts-column>
                    <ts-column field="name" header="Name"></ts-column>
                    <ts-column field="category" header="Category"></ts-column>
                    <ts-column field="quantity" header="Quantity"></ts-column>
                </ts-data-table>
            </div>
        </div>
	</div>
</template>

<script>
import { ref } from 'vue';
import productData from '@/assets/data/products-small.json';

export default {
    setup() {

        const products = ref([...productData.data]);

        return { products }
    }
}
</script>         