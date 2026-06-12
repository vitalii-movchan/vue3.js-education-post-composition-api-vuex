import axios from "axios";

export async function usePosts(page, limit) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _page: page,
            _limit: limit
        }
    });
}