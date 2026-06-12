export async function usePage({commit, dispatch}) {
    commit('settings/setLoading', true);

    try {
        const response = await dispatch('fetchPosts');

        commit('setPosts', response.data);
        commit('setTotal', response.headers['x-total-count']);
    } catch (exception) {
        alert(exception);
    } finally {
        commit('settings/setLoading', false);
    }
}