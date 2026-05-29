export const PostListSearch = {
    state: () => ({
       query: ''
    }),
    mutations: {
        setSearchQuery(state, query) {
            state.query = query;
        },
    },

    namespaced: true
}