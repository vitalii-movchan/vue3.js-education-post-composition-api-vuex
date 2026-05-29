<script>

import homePage from "../pages/HomePage.vue";

export default {
  name: "Navbar",
  computed: {
    homePage() {
      return homePage
    }
  },
  data() {
    return {
      page: {
        home: {
          path: '/',
          text: 'Vue3.js',
        },
        others: [
          {
            path: '/about',
            text: 'О сайте',
          },
          {
            path: '/posts',
            text: 'Список постов',
          },
        ]
      }
    }
  }
}
</script>

<template>
  <primary-nav :pages="page.others">
    <router-link :to=page.home.path>
      {{ page.home.text }}
    </router-link>
  </primary-nav>
</template>

<style scoped>
</style>