<script>

import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: "post-search-input",
  setup() {
    // 1. Initialize the store instance
    const store = useStore();

    // 2. Access State and Getters (Wrapped in computed to preserve reactivity)
    const query = computed(() => store.state.post_list.search.query);

    // 3. Methods to trigger Mutations and Actions
    const setSearchQuery = (query) => {
      store.commit('post_list/search/setSearchQuery', query) // Commits a mutation
    }

    return {
      query,
      setSearchQuery
    }
  }
}

</script>

<template>
  <!-- Begin Search -->
  <primary-input
      :model-value="query"
      @update:model-value="setSearchQuery"
      placeholder="Поиск..."
  />
  <!-- End Search -->
</template>

<style scoped>

</style>