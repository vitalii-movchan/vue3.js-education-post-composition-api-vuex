export const PostListSort = {
    state: () => ({
        selected: '',
        options: [
            {
                value: 'title',
                text: "По заголовку"
            },
            {
                value: 'body',
                text: "По описанию"
            },
        ]
    }),
    mutations: {
        setSortSelected(state, selected) {
            state.selected = selected;
        },
    },

    namespaced: true
}