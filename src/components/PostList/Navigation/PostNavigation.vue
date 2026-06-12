<script>
import {computed} from "vue";
import {useStore} from "vuex";

import PostLoader from "@/components/PostList/Navigation/PostLoader.vue";
import PostPagination from "@/components/PostList/Navigation/PostPagination.vue";

export default {
  name: "post-navigation",
  components: {
    PostLoader,
    PostPagination
  },
  setup() {
    // 1. Initialize the store instance
    const store = useStore();

    // 2. Access State and Getters (Wrapped in computed to preserve reactivity)
    const sentinel = computed(() => store.state.post_list.settings.sentinel);

    return {
      sentinel
    }
  }
}
</script>

<template>
  <div id="post-navigation">
    <!-- Begin PostList Navigation -->
    <post-loader v-if="sentinel"/>
    <post-pagination v-else/>
    <!-- Begin PostList Navigation -->
  </div>
</template>

<style scoped>

</style>