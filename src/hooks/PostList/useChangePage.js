export async function useChangePage({commit, dispatch}, page) {

    commit('settings/setLoading', true);

    try {
        commit('pagination/setPage', page)

        const response = await dispatch('fetchPosts');

        commit('setPosts', response.data);
    } catch (exception) {
        alert(exception);
    } finally {
        commit('settings/setLoading', false);
    }
}