<script setup>

import PostCreateButton from "@/components/PostList/Toolbar/PostCreateButton.vue";
import PostSortList from "@/components/PostList/Toolbar/PostSortList.vue";
import PostSearchInput from "@/components/PostList/Toolbar/PostSearchInput.vue";

</script>

<template>
  <div id="post-toolbar">
    <!-- Begin Toolbar -->
    <div class="row">
      <post-search-input/>
    </div>
    <div class="row">
      <post-create-button/>
      <post-sort-list/>
    </div>
  </div>
  <!-- End Toolbar -->
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>