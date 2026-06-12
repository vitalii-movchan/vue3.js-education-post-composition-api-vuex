<script>
import {useStore} from "vuex";
import {reactive} from "vue";

import {usePostFactory} from "@/composables/usePostFactory";

export default {
  name: "post-create-form",
  // Received parameters pass dynamically into setup
  emits: ['toggle:dialog'],
  setup(props, context) {
    // 1. Initial object setup
    const initialPost = usePostFactory();

    // 2. Reactive object setup
    const post = reactive(initialPost);

    // 3. Initialize the store instance
    const store = useStore();

    // 4. Methods to trigger Mutations and Actions
    const addPost = async (post) => {
      return store.dispatch('post_list/post/addPost', post) // Dispatches an action
    }

    // 5. Context events methods
    const closeDialog = () => {
      context.emit('toggle:dialog');
    }

    // 6. Form methods
    const collectForm = () => {
      return {...post}; // Get post by copying current state
    }

    const resetForm = () => {
      post.reset(); // Clear form by copying initial state back
    }

    // 7. Methods to trigger DOM events
    const submitForm = async () => {
      await addPost(collectForm()); // Add new post to list (Shallow Method)

      resetForm(); // Clear form after post was added
      closeDialog(); // Close dialog
    }

    return {
      post,
      submitForm
    }
  }
}
</script>

<template>

  <primary-form @submit.prevent>
    <primary-input v-model="post.title" placeholder="Название..."/>
    <primary-input v-model="post.body" placeholder="Описание..."/>

    <primary-button @click="submitForm">Добавить</primary-button>
  </primary-form>
</template>

<style scoped>

</style>