<script>
import {useStore} from "vuex";

export default {
  name: "post-loader",
  setup() {
    // 1. Initialize the store instance
    const store = useStore();

    // 2. Methods to trigger Mutations and Actions
    const scrollPage = () => {
      store.dispatch('post_list/scrollPage', null, {root: true}) // Dispatches an action
    }

    return {
      scrollPage
    }
  }
}
</script>

<template>
  <div id="post-loader">
    <!-- End PostList Loader (Sentinel Mode) -->
    <div v-intersection="scrollPage" class="observer"/>
    <!-- End PostList Loader -->
  </div>
</template>

<style scoped>
.observer {
  height: 30px;
  background: green;
}
</style>