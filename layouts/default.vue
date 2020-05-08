<template>
  <div>
    <navbar></navbar>
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya&family=Alegreya+Sans&family=Merriweather&family=Merriweather+Sans&family=Nunito&family=Nunito+Sans&family=Quattrocento&family=Quattrocento+Sans&family=Roboto&family=Roboto+Mono&family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Eczar&family=Gentium+Basic&family=Libre+Baskerville:wght@400;700&family=Libre+Franklin&family=Proza+Libre&family=Rubik&family=Taviraj&family=Trirong&family=Work+Sans&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Times New Roman';
}

.headline {
  font-weight: bold;
  font-size: 3.3em;
  margin-bottom: 0px;
}

p {
  font-size: 20px;
}

body {
  font-family: 'Nunito Sans', sans-serif;
}

a {
  color: inherit;
  text-decoration: inherit;
}

a:hover {
  color: inherit;
  text-decoration: inherit;
}

.section {
  margin-bottom: 30px;
}

#subject-menu {
  padding: 0;
  list-style-type: none;
}

#subject-menu li{
  display: inline;
}

.subject-preview {
  display: inline-block;
  margin: 10px;
  margin-left: 0px;
  margin-right: 20px;
  padding: 10px;
  border: 2px solid #eee;
  border-radius: 5px;
}

.subject-preview * {
  margin: 0px;
}

.body img {
  width: 100%;
}

</style>
