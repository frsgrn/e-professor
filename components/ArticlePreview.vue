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

.article-preview {
  margin: 10px 0px 0px 0px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.03);
  border-radius: 5px;
}

.article-preview p {
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.article-preview * {
  margin: 0px;
}

</style>