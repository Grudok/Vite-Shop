<script setup lang="ts">

</script>

<template>
    <nav class="w-full flex items-center bg-blue-900 text-white gap-20">
        <div class="p-3 pl-10">
            <span class="text-md font-bold text-xl uppercase underline text-teal-400 ">Navigation</span>
        </div>
        <div class="flex gap-5 w-full justify-between">
            <div class="flex gap-5">
                <RouterLink class="pointer underline hover:uppercase" :to="{ name: 'Home' }">Home</RouterLink>
                <RouterLink class="pointer underline hover:uppercase" :to="{ name: 'Profile' }">Profile</RouterLink>
                <RouterLink class="pointer underline hover:uppercase" :to="{ name: 'Products' }">Products</RouterLink>
            </div>
            <div class="mr-10">
                <RouterLink class="underline pointer hover:uppercase" :to="{ name: 'Login' }">Login</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>