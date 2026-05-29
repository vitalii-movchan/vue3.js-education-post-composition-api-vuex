<script setup>
import {useStore} from "vuex";

// 1. Initialize the store instance
const store = useStore();

// 2. Methods to trigger Mutations and Actions
const scrollPage = () => {
  store.dispatch('post_router/scrollPage') // Dispatches an action
}
</script>

<template>
  <div id="post-loader">
    <!-- End Post Loader (Sentinel Mode) -->
    <div v-intersection="scrollPage" class="observer"/>
    <!-- End Post Loader -->
  </div>
</template>

<style scoped>
.observer {
  height: 30px;
  background: green;
}
</style>