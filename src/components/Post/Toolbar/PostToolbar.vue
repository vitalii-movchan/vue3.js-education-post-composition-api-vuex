<script setup>

import PostCreateButton from "@/components/Post/Toolbar/PostCreateButton.vue";
import PostSortList from "@/components/Post/Toolbar/PostSortList.vue";
import PostSearchInput from "@/components/Post/Toolbar/PostSearchInput.vue";

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