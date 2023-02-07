import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        username: '',
        password: '',
        token: '',
        localStorage: localStorage.getItem('token'),
    }),
    getters: {
        isLoggedIn: (store: any) => {
            return store ? true : false;
        },
    },
    actions: {
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/auth/login', {
                    username: this.username,
                    password: this.password,
                })
                this.token = response.data.access_token
                localStorage.setItem('token', response.data.access_token)
                router.push({ name: 'Profile' })
            } catch (error) {
                console.error(error)
            }
        },
        async logout() {
            this.token = ''
            localStorage.removeItem('token')
            router.push({ name: 'Login' })
        },
    },
})
