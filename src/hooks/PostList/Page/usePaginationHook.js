export function usePaginationHook(store) {
    const usePagination = () => {
        const total = store.state.post_list.total;
        const limit = store.state.post_list.pagination.limit;

        const pages = Math.ceil(total / limit);

        store.commit('post_list/pagination/setPages', pages);
    }

    return {
        usePagination
    }
}