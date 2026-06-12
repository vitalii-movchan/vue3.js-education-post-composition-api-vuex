import axios from "axios";

export async function useFetch({state}) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _page: state.pagination.page,
            _limit: state.pagination.limit
        }
    });
}