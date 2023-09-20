import { createRouter, createWebHistory } from 'vue-router'
import Product from '../components/Product.vue'
import SingleProduct from '../components/SingleProduct.vue'

const routes = [
    { path: '/', component: Product },
    { path: '/product', component: Product },
    { path: '/product/:id', component: SingleProduct, name: 'singleproduct' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router