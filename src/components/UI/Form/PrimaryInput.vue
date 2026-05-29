<script>

import {computed} from "vue";

export default {
  name: 'primary-input',
  // Received parameters pass dynamically into setup
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: String
  },
  emits: ['update:model-value'],
  setup(props, context) {
    // 1. Reactive State
    const type = computed( () => props.type);
    const modelValue = computed( () => props.modelValue);

    // 2. Methods & Actions
    const updateInput = (event) => {
      // 2.1. Trigger the event with an optional payload
      context.emit('update:model-value', event.target.value);
    }

    // CRITICAL: Everything used in template must be returned explicitly
    return {
      type,
      modelValue,
      updateInput
    }
  }
}
</script>

<template>
  <input :type="type" :value="modelValue" @input="updateInput"/>
</template>

<style scoped>
input {
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>