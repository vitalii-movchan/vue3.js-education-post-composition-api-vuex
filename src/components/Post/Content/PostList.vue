<script setup>
import PostItem from "@/components/Post/Content/PostItem.vue";
import PostNavigation from "@/components/Post/Navigation/PostNavigation.vue";

import {useStore} from "vuex";
import {computed} from "vue";

// 1. Initialize the store instance
const store = useStore();

// 2. Access State and Getters (Wrapped in computed to preserve reactivity)
const posts = computed(() => store.getters["post_list/posts"]);
</script>

<template>
  <div v-if="posts" id="post-list">
    <!-- Begin Post List (Hidden initially) -->
    <h3>Список постов</h3>

    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
      />
    </transition-group>

    <post-navigation/>
    <!-- End Post List -->
  </div>

  <div v-else>
    <!-- Begin Empty Post List (Hidden initially) -->
    <h2>Список постов пуст</h2>
    <!-- End Empty Post List -->
  </div>

</template>

<style scoped>
h2 {
  color: red;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


</style>