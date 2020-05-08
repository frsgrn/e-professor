<template>
  <div>
    <div class="article-preview" v-for="post in posts" :key="post.id">
      <nuxt-link :to="'/article/' + post.id">
        <h1>{{post.title}}</h1>
        <h4>{{post.subheading}}</h4>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "posts"
  ]
};
</script>
<style>
</style>
