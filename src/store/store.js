import {createStore} from "vuex";


// PostList List
import {PostList} from "@/store/modules/PostList/PostList"

// PostList
import {PostRouter} from "@/store/modules/PostList/PostRouter"

export default createStore({
    modules: {

        // PostList
        post_router: PostRouter,
        post_list: PostList,
    }
});