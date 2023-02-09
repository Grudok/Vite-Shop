import { defineStore } from 'pinia'
import axios from 'axios'
import { Products } from '../interfaces/products.interface';

export const useProductsStore = defineStore({
    id: 'products',
    state: () => ({
        products: [] as Products[],
        token: localStorage.getItem('token'),
        input: '',
        tags: [] as string[],
        brand: [] as string[],
    }),

    actions: {
        async getProducts() {
            try {
                const response = await axios.get('http://localhost:3000/products', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                })
                this.products = response.data,
                this.brand = response.data.map((product: { brand: any; }) => product.brand).filter(
                    (value: any, index: any, self: string | any[]) => self.indexOf(value) === index).sort(),
                this.tags = response.data.map((product: { tags: any; }) => product.tags).flat().filter(
                    (value: any, index: any, self: string | any[]) => self.indexOf(value) === index).sort()
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
        async filterProductsBrands(filter: string) {
            try {
                const response = await axios.get<Products[]>('http://localhost:3000/products', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
                this.products = response.data.filter((product) => product.brand.includes(filter))
            } catch (error) {
                console.log(error)
            }
        },
        async filterProductsTags(filter: string) {
            try {
                const response = await axios.get<Products[]>('http://localhost:3000/products', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
                this.products = response.data.filter((product) => product.tags.includes(filter))
            } catch (error) {
                console.log(error)
            }
        },
    }
})

