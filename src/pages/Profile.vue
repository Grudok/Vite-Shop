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
})

</script>

<template>
    <div class="flex justify-center items-center w-full gap-4">
        <div class="rounded-lg bg-slate-200 px-4 py-12 gap-48">
            <div class="grid grid-cols-1 gap-4 justify-between">
                <h2 class="text-2xl px-4 uppercase">Welcome</h2>
                <div class="px-8 py-4">
                    <p class="mb-2"><span class="font-bold">Username:</span> {{ user?.username }}</p>
                    <p class="mb-2"><span class="font-bold">Email:</span> {{ user?.email }}</p>
                    <p class="mb-2"><span class="font-bold">Department:</span> {{ user?.department }}</p>
                    <p class="mb-2"><span class="font-bold">Join-Date</span> {{ user?.joinDate }}</p>
                    <p class="mb-2"><span class="font-bold">Level:</span> {{ user?.level }}</p>
                    <p class="mb-2"><span class="font-bold">FirstName:</span> {{ user?.firstName }}</p>
                    <p class="mb-2"><span class="font-bold">LastName:</span> {{ user?.lastName }}</p>
                    <p class="mb-2"><span class="font-bold">ID:</span> {{ user?.id }}</p>
                </div>
            </div>
        </div>
    </div>
    <RouterView></RouterView>
</template>
<style scoped>

</style>