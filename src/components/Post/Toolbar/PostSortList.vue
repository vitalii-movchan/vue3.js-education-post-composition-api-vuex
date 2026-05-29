<script>

import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: "post-sort-list",
  setup() {
    // 1. Initialize the store instance
    const store = useStore();

    // 2. Access State and Getters (Wrapped in computed to preserve reactivity)
    const selected = computed(() => store.state.post_list.sort.selected);
    const options = computed(() => store.state.post_list.sort.options);

    // 3. Methods to trigger Mutations and Actions
    const setSortSelected = (option) => {
      store.commit('post_list/sort/setSortSelected', option) // Commits a mutation
    }

    return {
      selected,
      options,
      setSortSelected
    }
  }
}

</script>

<template>
  <primary-select
      v-model="selected"
      :options="options"
      @update:model-value="setSortSelected"
  />
</template>

<style scoped>

</style>