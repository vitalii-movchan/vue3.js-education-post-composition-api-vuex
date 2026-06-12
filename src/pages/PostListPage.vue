<script>

import {useStore} from "vuex";

import PostToolbar from "@/components/PostList/Toolbar/PostToolbar.vue";
import PostContent from "@/components/PostList/Content/PostContent.vue";


export default {
  name: 'post-list-page',
  components: {
    PostContent, PostToolbar
  },
  setup() {
    // 1. Initialize the store instance
    const store = useStore()

    // 2. Methods to trigger Mutations and Actions
    store.dispatch('post_list/loadPage', {}, {}, {root: true});
  },
}

</script>

<template>
  <div id="posts">
    <!-- Begin Page (PostList) -->
    <h1>Cтраница с постами</h1>

    <post-toolbar/>
    <post-content/>
    <!-- End Page -->
  </div>
</template>

<style>
</style>
