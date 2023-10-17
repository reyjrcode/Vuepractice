import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Basket from '../pages/ShoppingBasket.vue'
import ProductsPage from '../pages/ProductsPage.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/basket',
        name: 'Basket',
        component: Basket
    },
    {
        path: '/product',
        name: 'ProductsPage',
        component: ProductsPage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
