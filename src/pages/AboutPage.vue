<script>

export default {
  name: "About"
}

</script>

<template>
  <header>
    <h1>Vue3.js</h1>
  </header>

  <section>
    <h2>Ulbi TV</h2>

    <p>Данное приложение было созданно в результате обучения на канале Ulbi TV</p>

    <div class="sidebar">
      <strong>Видео:</strong> https://www.youtube.com/watch?v=XzLuMtDelGk
    </div>
  </section>
</template>

<style scoped>
/* Book-style styling */
body {
  font-family: "Georgia", serif;
  line-height: 1.6;
  max-width: 800px;
  margin: auto;
  padding: 2em;
  color: #333;
}

/* Paragraph indentation: common in print books */
p {
  text-indent: 2em;
  margin-bottom: 0;
}

p:first-of-type {
  text-indent: 0;
}

/* No indent for the first paragraph of a section */

/* Headings */
h1 {
  font-size: 2.5em;
  text-align: center;
  border-bottom: 2px solid #333;
  padding-bottom: 0.5em;
}

h2 {
  font-size: 1.8em;
  margin-top: 1.5em;
  color: #2c3e50;
}

/* Sidebar/Box for key concepts */
.sidebar {
  background: #f4f4f4;
  border-left: 5px solid #2c3e50;
  padding: 1em;
  margin: 1.5em 0;
  font-style: italic;
}
</style>