// store/modules/PostModule.js
import axios from "axios";

import {PostListSettings} from "@/store/modules/PostList/PostListSettings";
import {PostListSearch} from "@/store/modules/PostList/PostListSearch";
import {PostListSort} from "@/store/modules/PostList/PostListSort";
import {PostListPagination} from "@/store/modules/PostList/PostListPagination";
import {PostListItem} from "@/store/modules/PostList/PostListItem";

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
        setPosts(state, posts) {
            state.posts = posts;
        },
        setTotal(state, total) {
            state.total = total;
        },
    },
    actions: {
        async fetchPosts({state}) {
            return await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.pagination.page,
                    _limit: state.pagination.limit
                }
            });
        },
        async loadPage({state, commit, dispatch}) {
            commit('post_list/settings/setLoading', true, {root: true});

            try {
                const response = await dispatch('fetchPosts');

                commit('setPosts', response.data);
                commit('setTotal', response.headers['x-total-count']);

                commit('pagination/setPages', Math.ceil(state.total / state.pagination.limit))
            } catch (exception) {
                alert(exception);
            } finally {
                commit('post_list/settings/setLoading', false, {root: true});
            }
        },
        addPosts({state}, posts) {
            state.posts = [...state.posts, ...posts];
        },
        hasMorePosts({state}) {
            return state.pagination.page < state.pagination.pages;
        },
        async changePage({commit, dispatch}, page) {
            commit('post_list/settings/setLoading', true, {root: true});

            try {
                commit('pagination/setPage', page)

                const response = await dispatch('fetchPosts');

                commit('setPosts', response.data);
            } catch (exception) {
                alert(exception);
            } finally {
                commit('post_list/settings/setLoading', false, {root: true});
            }
        },
        async scrollPage({state, commit, dispatch}) {
            if (dispatch('hasMorePosts') === false) return;

            try {
                commit('pagination/setPage', state.pagination.page += 1)

                const response = await dispatch('fetchPosts');

                dispatch('addPosts', response.data);
            } catch (exception) {
                alert(exception);
            }
        },
    },
    namespaced: true
}