<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()

onMounted(async () => {
    await productsStore.getProducts()
})

</script>

<template>
    <div class="flex flex-col gap-2 p-2 bg-white">
        <h1 class="text-4xl uppercase underline text-center  text-cyan-800 font-bold px-2 py-2">Products</h1>
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
                    <p class="mb-2">{{ products.tags }}</p>
                    <p class="mb-2">{{ products.brand }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>