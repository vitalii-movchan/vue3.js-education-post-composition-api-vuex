import {createStore} from "vuex";


// Post List
import {PostList} from "@/store/modules/PostList/PostList"

// Post
import {PostRouter} from "@/store/modules/PostList/PostRouter"

export default createStore({
    modules: {

        // Post
        post_router: PostRouter,
        post_list: PostList,
    }
});