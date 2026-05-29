<script>

export default {
  name: "PostPage"
}

</script>

<template>
  <div id="post">
    <h1> Это страница поста с ID: {{ $route.params.id }} </h1>
  </div>
</template>

<style scoped>

</style>