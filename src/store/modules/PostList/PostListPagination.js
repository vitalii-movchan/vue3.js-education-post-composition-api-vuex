export const PostListPagination = {
    state: () => ({
        page: 1,
        pages: 1,
        limit: 10,
    }),
    mutations: {
        setPage(state, page) {
            state.page = page;
        },
        setPages(state, pages) {
            state.pages = pages;
        },
    },
    namespaced: true
}