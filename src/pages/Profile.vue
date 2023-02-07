<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { User } from '../interfaces/user.interface'
import { useLoginStore } from '../stores/login'
import axios from 'axios';

const login = useLoginStore()
const user = ref<User>()

onMounted(async () => {
        const response = await axios.get<User>(`http://localhost:3000/auth/profile/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        user.value = response.data
    }
)

</script>

<template>
    <div class="gap-5 bg-slate-200 px-4 py-12 border-black rounded w-full">
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-2xl">Welcome {{user?.userName}}</h2>
            <h3 class="text-xl">Email: {{user?.email}}</h3>
            <h3 class="text-xl">Department: {{user?.department}}</h3>
            <h3 class="text-xl">Join date: {{user?.joinDate}}</h3>
            <h3 class="text-xl">Level: {{user?.level}}</h3>
            <h3 class="text-xl">Firstname: {{user?.firstName}}</h3>
            <h3 class="text-xl">Lastname: {{user?.lastName}}</h3>
            <h3 class="text-xl">ID: {{user?.id}}</h3>
            <button class="bg-red-300 border-2 border-red-500 w-44 p-2 hover:bg-red-700" @click="login.logout()">Logout</button>
        </div>
    </div>
        <RouterView></RouterView>
</template>
<style scoped></style>