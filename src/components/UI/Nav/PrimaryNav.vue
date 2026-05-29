<script>
export default {
  name: "primary-nav",
  props: {
    pages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <nav class="menu">
    <div class="menu-title">
      <slot></slot>
    </div>
    <ul v-if="pages" class="menu-list">
      <li v-for="page in pages" class="menu-item">
        <router-link :to="page.path">{{ page.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  box-shadow: 2px 2px 4px gray;
  background-color: lightgray;
}

nav a {
  text-decoration: none;
}

nav .menu-list {
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-left: auto;
}

nav .menu-list .menu-item {
  text-decoration: none;
  margin-left: 15px;
}

.router-link-active {
  color: blue;
}
</style>