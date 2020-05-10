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


@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
}

.headline {
  font-size: 3.3em;
  margin-bottom: 0px;
}

p {
  font-size: 17px;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  background-color: #f3f5f7;
}

a {
  color: inherit;
  text-decoration: inherit;
}

a:hover {
  color: inherit;
  text-decoration: inherit;
}

p a:hover {
  text-decoration: underline;
  color: #0832a5;
}

p a {
  color: #0D4EFF;
}

.section {
  margin-bottom: 30px;
}

#subject-menu {
  padding: 0;
  list-style-type: none;
}

.article {
  background-color: white;
  padding: 25px;
  padding-top: 35px;
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.03);
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 5px;
}

.article .content {
  max-width: 700px;
  margin: auto;
  text-align: left;
}

.article p {
  color: #35384e;
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
