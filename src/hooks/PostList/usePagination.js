export function usePagination({state, commit}) {
    const pages = Math.ceil(state.total / state.pagination.limit);

    commit('pagination/setPages', pages);
}