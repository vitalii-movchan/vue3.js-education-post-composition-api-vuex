export const PostListSettings = {
    state: () => ({
        loading: true,
        sentinel: false
    }),
    mutations: {
        setLoading(state, loading) {
            state.loading = loading;
        },
    },
    namespaced: true
}