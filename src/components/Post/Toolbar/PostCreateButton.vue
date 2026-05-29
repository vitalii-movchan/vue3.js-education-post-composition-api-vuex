<script>

import {reactive} from "vue";
import {useDialogFactory} from "@/composables/UI/useDialogFactory";

import PostCreateForm from "@/components/Post/Toolbar/PostCreateForm.vue";

export default {
  name: "post-create-button",
  components: {PostCreateForm},
  setup() {
    // 1. Initial object setup
    const initialDialog = useDialogFactory();

    // 2. Reactive object setup
    const dialog = reactive(initialDialog);

    // 3. Methods to trigger Context Events
    const toggle = () => {
      dialog.toggle();
    }

    return {
      dialog,
      toggle
    }
  }
}

</script>

<template>
  <div id="post-create-action">
    <primary-button @click="toggle">Создать пост</primary-button>

    <primary-dialog v-model="dialog.open" @update:model-value="toggle">
      <post-create-form @toggle:dialog="toggle"/>
    </primary-dialog>
  </div>
</template>

<style scoped>
</style>