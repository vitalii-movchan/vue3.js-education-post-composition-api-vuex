import {useStore} from "vuex";

export async function useScrollPage({getters, commit, dispatch}) {

    if (getters['post_list/pagination/hasMore'] === false) return;

    try {
        commit('pagination/incrementPage');

        const response = await dispatch('fetchPosts');

        commit('addPosts', response.data);
    } catch (exception) {
        alert(exception);
    }
}