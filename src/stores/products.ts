import { defineStore } from 'pinia'
import axios from 'axios'
import { Products } from '../interfaces/products.interface';

export const useProductsStore = defineStore({
    id: 'products',
    state: () => ({
        products: [] as Products[],
        token: localStorage.getItem('token'),
        input: '',
    }),

    actions: {
        async getProducts() {
            try {
                const response = await axios.get('http://localhost:3000/products', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                })
                this.products = response.data
            } catch (error) {
                console.log(error)
            }
        },
        async searchProducts(search: string) {
            try {
                const response = await axios.get<Products[]>('http://localhost:3000/products', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
                this.products = response.data.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
            } catch (error) {
                console.log(error)
            }
        },
        async filterWithTags(tag: string) {
            try {
                const response = axios.get<Products[]>('http://localhost:3000/products/tags?', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    params: {
                        tag: tag
                    },
                })
                this.products = (await response).data
            } catch (error) {
                console.log(error)
            }
        },
    }
})

