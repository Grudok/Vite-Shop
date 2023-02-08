import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        username: localStorage.getItem('username') || '',
        password: '',
        token: '',
        localStorage: localStorage.getItem('token'),
        loggedIn: localStorage.getItem('token') !== null,
        firstname: '',
        lastname: '',
        email: '',
        usernameSign: '',
        passwordSign: '',
        passwordRepeat: '',
    }),
    actions: {
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/auth/login', {
                    username: this.username,
                    password: this.password,                    
                })
                this.token = response.data.access_token
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('username', this.username)
                router.push({ name: 'Profile' })
                this.loggedIn = true
            } catch (error) {
                console.error(error)
            }
        },
        async logout() {
            this.token = ''
            this.username = ''
            this.password = ''
            localStorage.removeItem('username')
            localStorage.removeItem('token')
            localStorage.removeItem('password')
            router.push({ name: 'Login' })
            this.loggedIn = false
        },
        async signUp()  {
            try {
                const response = await axios.post("http://localhost:3000/auth/sign-up")
                this.firstname = response.data.firstname
                this.lastname = response.data.lastname
                this.email = response.data.email
                this.username = response.data.usernameSign  
                this.passwordSign = response.data.passwordSign
                this.passwordRepeat = response.data.passwordRepeat
                router.push({ name: 'Login' })
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        },
    },
})
