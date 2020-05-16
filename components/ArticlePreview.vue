<template>
  <div>
    <div class="article-preview" style="position: relative;">
      <bookmark :post="post" style="position: absolute; right: 30px; top: 20px;"></bookmark>
      <nuxt-link :to="post._path">
        <p>
          <i class="fab fa-youtube" v-if="post.youtubeUrl"></i>
          <b>{{post.title}}</b>
        </p>
        <p>{{post.subheading}}</p>
        <div
          style="color: #00000090;"
          v-html="$md.set({ html: true, breaks: false }).renderInline(post.body)"
          class="body-preview"
        ></div>
        <p>{{post.date}}, {{post.author}}</p>
        <p style="font-weight: bold; border-bottom: 2px solid black; display: inline;">Read more</p>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Bookmark from "~/components/Bookmark.vue";
export default {
  props: ["post"],
  components: {
    Bookmark
  }
};
</script>
<style>
</style>