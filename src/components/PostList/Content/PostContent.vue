<script>
import PostList from "@/components/PostList/Content/PostList.vue";

import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "post-content",
  components: {PostList},
  setup() {
    // 1. Initialize the store instance
    const store = useStore();

    // 2. Access State and Getters (Wrapped in computed to preserve reactivity)
    const loading = computed(() => store.state.post_list.settings.loading);

    return {
      loading,
    }
  }
}
</script>

<template>
  <div v-if="loading === false" id="post-content">
    <!-- Begin Content Element (Hidden initially) -->
    <post-list/>
    <!-- End Content Element -->
  </div>

  <div v-else class="loading">
    <!-- Begin Loader Element  (Visible initially) -->
    Идет загрузка .....
    <!-- End Loader Element -->
  </div>
</template>

<style scoped>

</style>