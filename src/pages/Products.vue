<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()

onMounted(async () => {
    await productsStore.getProducts()
})

const input = computed({
    get: () => productsStore.input,
    set: (value) => productsStore.input = value
})

</script>

<template>
    <div class="flex items-center justify-start m-5 w-2/4">
        <input type="text" placeholder="Search for Products" v-model="input"
            @input="productsStore.searchProducts(input)"
            class="border border-slate-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 text-black w-full p-1">
        <div class="m-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded"
                @click="productsStore.searchProducts(input)">
                Search
            </button>
        </div>
    </div>
    <div class="box-border py-4">
        <div class="flex flex-row px-2 py-4">
            <div class="border bg-slate-100 w-44 px-2 py-4">
                <div class="flex flex-col items-start">
                    <h2 class="text-2xl px-2 py-2 uppercase underline">Brands</h2>
                    <div class="flex flex-col gap-2">
                        <div v-for="brands in productsStore.brand" class="flex flex-row gap-2">
                            <input type="checkbox" :value="brands" @change="productsStore.filterProductsBrands(brands)">
                            <label :for="brands">{{ brands }}</label>
                        </div>
                    </div>
                    <h2 class="text-2xl px-2 py-2 uppercase underline">Tags</h2>
                    <div class="flex flex-col gap-2">
                        <div v-for="tags in productsStore.tags" class="flex flex-row gap-2">
                            <input type="checkbox" :value="tags" :id="tags" @change="productsStore.filterProductsTags(tags)">
                            <label :for="tags">{{ tags }}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 p-2 bg-white">
                <div class="min-h-40 grid grid-cols-2 gap-4">
                    <div v-for="products in productsStore.products" class="border rounded-xl bg-blue-200 gap-4">
                        <div class="flex px-2 py-2">
                            <img class="h-40 w-40 shrink-0 object-contain bg-white" :src="products.image">
                            <h2 class="text-2xl px-4">{{ products.name }}</h2>
                        </div>
                        <div class="px-8 py-4">
                            <p class="mb-2">{{ "ID: " + products.id }}</p>
                            <p class="mb-2">{{ "Price: " + products.price + "€" }}</p>
                            <p class="mb-2">{{ products.description }}</p>
                            <p class="mb-2">{{ products.brand }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>