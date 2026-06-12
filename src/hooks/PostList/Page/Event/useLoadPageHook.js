import {usePaginationHook} from "@/hooks/PostList/Page/usePaginationHook";
import {usePopulationHook} from "@/hooks/PostList/Page/usePopulationHook";

export function useLoadPageHook(store) {
    const useLoadPage = async () => {
        // Send store state as an argument to the hook
        const {usePopulation} = usePopulationHook(store);
        const {usePagination} = usePaginationHook(store);

        await usePopulation();
        usePagination();
    }

    return {
        useLoadPage
    }
}