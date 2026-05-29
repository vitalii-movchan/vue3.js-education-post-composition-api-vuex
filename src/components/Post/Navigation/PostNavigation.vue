<script setup>

import PostLoader from "@/components/Post/Navigation/PostLoader.vue";
import PostPagination from "@/components/Post/Navigation/PostPagination.vue";

import {computed} from "vue";
import {useStore} from "vuex";

// 1. Initialize the store instance
const store = useStore()

// 2. Access State and Getters (Wrapped in computed to preserve reactivity)
const sentinel = computed(() => store.state["post_list/settings/sentinel"]);

</script>

<template>
  <div id="post-navigation">
    <!-- Begin Post Navigation -->
    <post-loader v-if="sentinel"/>
    <post-pagination v-else/>
    <!-- Begin Post Navigation -->
  </div>
</template>

<style scoped>

</style>