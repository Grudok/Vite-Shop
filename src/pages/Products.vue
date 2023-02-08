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
            <input type="text" placeholder="Search for Products" v-model="input" @input="productsStore.searchProducts(input)"
                class="border border-slate-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 text-black w-full p-1">
        <div class="m-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded" @click="productsStore.searchProducts(input)">
                Search
            </button>
        </div>
    </div>
    <div>
        
    </div>
    <div class="flex flex-col gap-2 p-2 bg-white">
        <div class="min-h-40 grid w-full grid-cols-2 justify-between gap-4">
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
</template>

<style scoped>

</style>