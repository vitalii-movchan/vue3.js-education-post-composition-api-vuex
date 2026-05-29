<script>
export default {
  name: "primary-button"
}
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  align-self: flex-end;
  border: 1px solid teal;
  padding: 10px 15px;
  background: none;
  color: teal;
}
</style>