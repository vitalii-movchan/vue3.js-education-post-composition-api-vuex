export const PostListItem = {
    actions: {
        addPost({rootState, rootGetters}, post) {
            post.id = rootGetters["post_list/nextID"];

            console.log(rootState);
            rootState.post_list.posts.push(post);
        },
        deletePost({rootState}, id) {
            rootState.post_list.posts = rootState.post_list.posts.filter(post => post.id !== id);
        }
    },
    namespaced: true
}