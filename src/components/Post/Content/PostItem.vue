<script setup>
// Declare props and assign to a variable to access inside <script>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

import {useStore} from "vuex";

// 1. Initialize the store instance
const store = useStore();

// 2. Methods to trigger Mutations and Actions
const viewPost = (id) => {
  store.dispatch('post_router/viewPost', id) // Dispatches an action
}

const deletePost = (id) => {
  store.dispatch('post_list/post/deletePost', id) // Dispatches an action
}
</script>

<template>
  <div class="post-item">

    <div class="post-content">
      <div>Название: <strong>{{ post.title }}</strong></div>
      <div>Описание: <strong>{{ post.body }}</strong></div>
    </div>

   <div class="post-action-list">
    <primary-button class="post-action" @click="viewPost(post.id)">Обзор</primary-button>
    <primary-button class="post-action" @click="deletePost(post.id)">Удалить</primary-button>
   </div>

  </div>
</template>

<style scoped>
.post-item {
  margin-bottom: 15px;
  border: 1px solid teal;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-item .post-action-list .post-action {
  margin-left: 15px;
}
</style>