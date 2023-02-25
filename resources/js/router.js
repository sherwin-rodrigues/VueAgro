import { createWebHashHistory, createRouter, createWebHistory } from "vue-router";

import home from './pages/home.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';
import contact from './pages/contact.vue';
import about from './pages/about.vue';
import navigation from './pages/navigation.vue';
import cart from './pages/cart.vue';
import productDetail from './pages/productDetail.vue';


const routes = [
    {
        path : '/',
        name : 'Home',
        component : home
    },
    {
        path : '/login',
        name : 'Login',
        component : login
    },
    {
        path : '/register',
        name : 'Register',
        component : register
    },
    {
        
        path : '/contact',
        name : 'Contact',
        component:contact
    },
    {
        
        path : '/about',
        name : 'About',
        component:about
    },
    {
        
        path : '/navigation',
        name : 'navi',
        component:navigation
    },
    {
        
        path : '/cart',
        name : 'Cart',
        component:cart
    },
    {
        
        path : '/productDetail',
        name : 'productDetail',
        component:productDetail
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;