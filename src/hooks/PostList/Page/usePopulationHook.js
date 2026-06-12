export function usePopulationHook(store) {
    const usePopulation = async () => {
        store.commit('post_list/settings/setLoading', true, {root: true});

        try {
            const response = await store.dispatch('post_list/fetchPosts');

            store.commit('post_list/setPosts', response.data, {root: true});
            store.commit('post_list/setTotal', response.headers['x-total-count'], {root: true});
        } catch (exception) {
            alert(exception);
        } finally {
            store.commit('post_list/settings/setLoading', false, {root: true});
        }
    };

    return {
        usePopulation
    }
}