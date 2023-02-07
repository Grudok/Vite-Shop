<script setup lang="ts">


</script>

<template>
    <nav class="w-full flex items-center gap-4 text-white bg-gradient-to-l from-slate-500 to-slate-800">
        <h2 class="text-xl uppercase px-2 py-2 my-4 mx-4">Navigate</h2>
        <div class="flex gap-5">
            <RouterLink class="underline pointer hover:uppercase" :to="{name: 'Home'}">Home</RouterLink>
            <RouterLink class="underline pointer hover:uppercase" :to="{ name: 'Login' }">Login</RouterLink>
            <RouterLink class="underline pointer hover:uppercase" :to="{name: 'Profile'}">Profile</RouterLink>
        </div>
    </nav>
    <RouterView></RouterView>
</template>

<style scoped>

</style>
