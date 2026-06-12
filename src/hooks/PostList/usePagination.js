export function usePagination({state, commit}) {
    const pages = Math.ceil(state.total / state.pagination.limit);

    commit('post_list/pagination/setPages', pages, {root: true});
}