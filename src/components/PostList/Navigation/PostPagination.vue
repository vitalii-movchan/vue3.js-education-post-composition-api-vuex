<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {useChangePageHook} from "@/hooks/PostList/Page/Event/useChangePageHook";

export default {
  name: "post-pagination",
  setup() {
    // 1. Initialize the store instance
    const store = useStore();

    // 2. Access State and Getters (Wrapped in computed to preserve reactivity)
    const current_page = computed(() => store.state.post_list.pagination.page);
    const pages = computed(() => store.state.post_list.pagination.pages);

    // 3. Methods to trigger Mutations and Actions
    const {useChangePage} = useChangePageHook(store);

    return {
      current_page,
      pages,
      useChangePage
    }
  }
}
</script>

<template>
  <div id="post-pagination">
    <!-- Begin PostList Pagination (Pagination Mode) -->
    <div
        v-for="page in pages"
        :key="page"
        class="page"
        :class="{'current-page': page === current_page}"
        @click="useChangePage(page)"
    >
      {{ page }}
    </div>
    <!-- End PostList Pagination -->
  </div>
</template>

<style scoped>
#post-pagination {
  display: flex;
  margin-bottom: 15px;
}

#post-pagination .page {
  border: 1px solid black;
  padding: 10px;
}

#post-pagination .current-page {
  color: teal;
  border: 2px solid teal;
  background-color: lightgray;

}
</style>