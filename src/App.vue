<script>

import Navbar from "@/assets/Navbar.vue";

export default {
  name: "App",
  components: {
     Navbar
  }
}
</script>

<template>
  <navbar />
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  padding: 20px;
}

h1 {
  margin-bottom: 15px;
}
</style>
