<script>
import {computed} from "vue";

export default {
  name: "primary-dialog",
  // Received parameters pass dynamically into setup
  props: {
    modelValue: Boolean,
  },
  emits: ['update:model-value'],
  setup(props, context) {
    // 1. Reactive State
    const modelValue = computed( () => props.modelValue);

    // 2. Methods & Actions
    const toggle = () => {
      // 2.1. Trigger the event with an optional payload
      context.emit('update:model-value', modelValue.value);
    }

    // CRITICAL: Everything used in template must be returned explicitly
    return {
      modelValue,
      toggle
    }
  }
}
</script>
 
<template>
  <dialog v-if="modelValue === true" open>
    <div class="wrapper">
      <div class="content">
        <div class="header">
          <!-- Clicking this button natively submits the form and closes the dialog -->
          <button type="button" aria-label="Close" @click="toggle">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="body">
          <slot></slot>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
div.wrapper {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

div.wrapper div.header {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}

div.wrapper div.content {
  margin: auto;
  padding: 20px;
  min-height: 50px;
  max-height: 300px;
  background: white;
}
</style>