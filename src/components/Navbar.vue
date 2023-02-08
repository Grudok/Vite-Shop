<script setup lang="ts">
import { useLoginStore } from '../stores/login'

const login = useLoginStore()

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
                <RouterLink v-if="!login.loggedIn" class="pointer underline hover:uppercase" :to="{ name: 'SignUp' }">Sign-Up</RouterLink>
            </div>
            <div class="mr-10">
                <span v-if="login.loggedIn" class="px-2">{{"Hello, " + login.username }}</span>
                <RouterLink v-if="!login.loggedIn" class="underline pointer hover:uppercase" :to="{ name: 'Login' }">Login</RouterLink>
                <button v-else="" class="bg-red-300 border-2 border-red-500 hover:bg-red-700"
                    @click="login.logout()">Logout</button>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>