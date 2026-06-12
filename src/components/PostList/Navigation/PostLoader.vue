<script>
import {useStore} from "vuex";

import {useScrollPageHook} from "@/hooks/PostList/Page/Event/useScrollPageHook";

export default {
  name: "post-loader",
  setup() {
    // 1. Initialize the store instance
    const store = useStore();

    // 2. Methods to trigger Mutations and Actions
    const {useScrollPage} = useScrollPageHook(store);

    return {
      useScrollPage
    }
  }
}
</script>

<template>
  <div id="post-loader">
    <!-- End PostList Loader (Sentinel Mode) -->
    <div v-intersection="useScrollPage" class="observer"/>
    <!-- End PostList Loader -->
  </div>
</template>

<style scoped>
.observer {
  height: 30px;
  background: green;
}
</style>