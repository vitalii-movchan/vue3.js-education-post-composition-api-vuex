import axios from "axios";

export async function usePosts({state}) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _page: state.pagination.page,
            _limit: state.pagination.limit
        }
    });
}