<script>

import {computed} from "vue";

export default {
  name: 'primary-select',
  // Received parameters pass dynamically into setup
  props: {
    modelValue: String,
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:model-value'],
  setup(props, context) {
    // 1. Reactive State
    const modelValue = computed( () => props.modelValue);
    const options = computed( () => props.options);

    // 2. Methods & Actions
    const  changeOption = (event) => {
      // 2.1. Trigger the event with an optional payload
      context.emit('update:model-value', event.target.value)
    }

    // CRITICAL: Everything used in template must be returned explicitly
    return {
      modelValue,
      options,
      changeOption
    }
  }
}
</script>

<template>
  <!-- v-model binds the select element to the 'selected' variable -->
  <select @change="changeOption">
    <option value>Выберите из списка ....</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<style scoped>

</style>