<template>
  <div>
    <div class="article-preview" v-for="post in posts" :key="post._path">
      <nuxt-link :to="post._path">
        <p><b>{{post.title}}</b></p>
        <p>{{post.subheading}}</p>
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