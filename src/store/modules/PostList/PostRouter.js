import router from '@/router/router'; // Path to your router configuration file

export const PostRouter = {
    actions: {
        viewPost({dispatch}, id) {
            console.log(id);
            let parameters = {
                name: 'post',
                params: {
                    id: id
                }
            };

            dispatch('route', parameters);
        },
        route({}, parameters) {
            // Navigate directly using the imported router instance
            router.push(parameters).then(r => () => {});
        }
    },
    namespaced: true
}