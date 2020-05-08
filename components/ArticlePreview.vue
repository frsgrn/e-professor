<template>
  <div>
    <div class="article-preview" v-for="post in posts" :key="post._path">
      <nuxt-link :to="post._path">
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