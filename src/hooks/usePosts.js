import {onMounted} from "vue";
import {useStore} from "vuex";

export function usePosts() {
    // 1. Initialize the store instance
    const store = useStore();

    // 2. Method to trigger Mutations and Actions
    const loadPage = async() => store.dispatch('post-list/loadPage' , {}, {root: true});

    // 2. Call method for trigger load page
    onMounted(loadPage);
}