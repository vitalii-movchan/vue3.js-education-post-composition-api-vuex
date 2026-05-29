import {createRouter, createWebHistory} from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import PostListPage from "@/pages/PostListPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostPage from "@/pages/PostPage.vue";

const routers = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'about',
        path: '/about',
        component: AboutPage
    },
    {
        name: 'posts',
        path: '/posts',
        component: PostListPage
    },
    {
        name: 'post',
        path: '/post/:id',
        component: PostPage
    }
];

const router = createRouter({
    routes: routers,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;