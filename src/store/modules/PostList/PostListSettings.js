export const PostListSettings = {
    state: () => ({
        loading: true,
        sentinel: true
    }),
    mutations: {
        setLoading(state, loading) {
            state.loading = loading;
        },
    },
    namespaced: true
}