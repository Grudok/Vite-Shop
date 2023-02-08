<script setup lang="ts">
import { useLoginStore } from '../stores/login'

const login = useLoginStore()

</script>

<template>
    <div class="flex justify-center items-center w-full gap-4">
        <form class="flex justify-center items-center rounded-lg bg-slate-200 px-4 py-12 gap-48"
            @submit.prevent="login.login()">
            <div class="flex flex-col justify-center items-center px-4 py-4 gap-4">
                <label for="username">Username</label>
                <input class="border border-black rounded" type="text" id="username" v-model="login.username">
                <label for="password">Password</label>
                <input class="border border-black rounded" type="password" id="password" v-model="login.password">
                <button type="submit"
                    class="bg-green-300 border-2 border-green-500 w-44 py-4 px-4 gap-4 hover:bg-green-700">Login</button>
            </div>
        </form>
    </div>
</template>
<style scoped>

</style>