import {usePaginationHook} from "@/hooks/PostList/Page/usePaginationHook";
import {usePageHook} from "@/hooks/PostList/Page/usePageHook";

export function useLoadPageHook(store) {
    const useLoadPage = async () => {
        // Send store state as an argument to the hook
        const {usePage} = usePageHook(store);
        const {usePagination} = usePaginationHook(store);

        await usePage();
        usePagination();
    }

    return {
        useLoadPage
    }
}