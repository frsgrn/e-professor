<template>
  <div class="article">
      <div class="section">
    <h1 class="headline">{{post.title}}</h1>
    <h2 class="subheading">{{post.subheading}}</h2>
    </div>
    <div class="body" v-html="$md.render(post.body)"></div>
    <p>{{post.author}}, {{post.date}}</p>
    </div>
</template>
<script>
    export default {
        props: ["post"]
    }
</script>
<style>
</style>
