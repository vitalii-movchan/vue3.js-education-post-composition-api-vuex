export function useScrollPageHook(store) {
    const useScrollPage = async () => {
        if (store.getters['post_list/pagination/hasMore'] === false) return;

        try {
            store.commit('post_list/pagination/incrementPage');

            const response = await store.dispatch('post_list/fetchPosts');

            store.commit('post_list/addPosts', response.data);
        } catch (exception) {
            alert(exception);
        }
    }

    return {
        useScrollPage
    }
}