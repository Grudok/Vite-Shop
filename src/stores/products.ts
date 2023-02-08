import { defineStore } from 'pinia'
import axios from 'axios'
import { Products } from '../interfaces/products.interface';

export const useProductsStore = defineStore({
    id: 'products',
    state: () => ({
        products: [] as Products[],
        token: localStorage.getItem('token'),
    }),

    actions: {
        async getProducts() {
            try {
                const response = await axios.get<Products[]>('http://localhost:3000/products', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                this.products = response.data
            } catch (error) {
                console.log(error)
            }
        },
    }
})
    
