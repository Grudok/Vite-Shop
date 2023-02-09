<script setup lang="ts">
import { useLoginStore } from '../stores/login'
import { useRouter } from 'vue-router'


const login = useLoginStore()

const sendToLoggin = () => {
    const router = useRouter()
    router.push({ name: 'Login' })
}


</script>

<template>
    <div class="flex justify-center items-center w-full gap-4">
        <form class="flex justify-center items-center rounded-lg bg-slate-200 px-4 py-12 gap-48"
            @submit.prevent="login.signUp()">
            <div class="flex flex-col justify-center items-center px-4 py-4 gap-4">
                <label for="firstname">First Name</label>
                <input class="border border-black rounded" type="text" id="username" v-model="login.firstname">
                <label for="lastname">Last Name</label>
                <input class="border border-black rounded" type="text" id="text" v-model="login.lastname">
                <button type="submit"></button>
                <label for="email">Email</label>
                <input class="border border-black rounded" type="text" id="text" v-model="login.email">
                <label for="username">Username</label>
                <input class="border border-black rounded" type="username" id="username" v-model="login.usernameSign">
                <label for="passwort">Password</label>
                <input class="border border-black rounded" type="password" id="password" v-model="login.passwordSign">
                <label for="passwordRepeat">Repeat Password</label>
                <input class="border border-black rounded" type="password" id="password" v-model="login.passwordSign">
                <button type="submit" 
                class="bg-green-300 border-2 border-green-400 w-44 py-4 px-4 gap-4 hover:bg-green-500">Sign-Up</button>
                <button type="submit" @click="sendToLoggin()" 
                class="bg-green-300 border-2 border-green-500 w-44 py-4 px-4 gap-4 hover:bg-green-700">Login in instead</button>
            </div>
        </form>
    </div>
</template>
<style scoped>

</style>