export function useChangePageHook(store) {
    const useChangePage = async (page) => {
        store.commit('post_list/settings/setLoading', true);

        try {
            store.commit('post_list/pagination/setPage', page)

            const response = await store.dispatch('post_list/fetchPosts');

            store.commit('post_list/setPosts', response.data);
        } catch (exception) {
            alert(exception);
        } finally {
            store.commit('post_list/settings/setLoading', false);
        }
    }

    return {
        useChangePage
    }
}