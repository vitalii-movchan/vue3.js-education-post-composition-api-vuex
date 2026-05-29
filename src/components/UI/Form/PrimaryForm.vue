<script>
export default {
  name: "primary-form"
}
</script>

<template>
  <form>
    <slot></slot>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>