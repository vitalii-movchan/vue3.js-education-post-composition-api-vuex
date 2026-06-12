// store/modules/PostModule.js
import axios from "axios";

import {PostListSettings} from "@/store/modules/PostList/PostListSettings";
import {PostListSearch} from "@/store/modules/PostList/PostListSearch";
import {PostListSort} from "@/store/modules/PostList/PostListSort";
import {PostListPagination} from "@/store/modules/PostList/PostListPagination";
import {PostListItem} from "@/store/modules/PostList/PostListItem";

import {usePage} from "@/hooks/PostList/usePage";
import {usePagination} from "@/hooks/PostList/usePagination";
import {useScrollPage} from "@/hooks/PostList/useScrollPage";
import {useChangePage} from "@/hooks/PostList/useChangePage";
import {usePosts} from "@/hooks/PostList/usePosts";


export const PostList = {
    modules: {
        settings: PostListSettings, // Nest the settings module inside the post list module
        search: PostListSearch, // Nest the search module inside the post list module
        sort: PostListSort, // Nest the sort module inside the post list module
        pagination: PostListPagination, // Nest the pagination module inside the post list module
        post: PostListItem
    },
    state: () => ({
        posts: [],
        total: 0,
    }),
    getters: {
        nextID(state) {
            return Math.max(...state.posts.map(post => post.id)) + 1;
        },
        posts(state) {
            // 1. Create a shallow copy to avoid mutating the original state
            let posts = [...state.posts];

            // 2. Filter the items
            posts = posts.sort((firstPost, secondPost) => {
                return firstPost[state.sort.selected]?.localeCompare(secondPost[state.sort.selected])
            });

            // 3. Sort the items
            posts = posts.filter(
                post => post.title.toLowerCase().includes(state.search.query.toLowerCase()) ||
                    post.body.toLowerCase().includes(state.search.query.toLowerCase())
            );

            return posts;
        }
    },
    mutations: {
        addPosts(state, posts) {
            state.posts = [...state.posts, ...posts];
        },
        setPosts(state, posts) {
            state.posts = posts;
        },
        setTotal(state, total) {
            state.total = total;
        }
    },
    actions: {
        async fetchPosts({state}) {
            // 1. Initialize the store post list hook instance
            return usePosts({state});
        },
        async loadPage({state, commit, dispatch}) {
            // 1. Initialize the store post list page hook instance
            await usePage({commit, dispatch});

            // 2. Initialize the store post list pagination hook instance
            usePagination({state, commit});
        },
        async changePage({commit, dispatch}, page) {
            // 1. Initialize the store change post list page hook instance
            await useChangePage({commit, dispatch}, page);
        },
        async scrollPage({getters, commit, dispatch}) {
            // 1. Initialize the store scroll post list page hook instance
            await useScrollPage({getters, commit, dispatch});
        },
    },
    namespaced: true
}