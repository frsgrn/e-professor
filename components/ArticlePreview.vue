<template>
  <div>
    <div class="article-preview" style="position: relative;">
      <bookmark :post="post" style="position: absolute; right: 10px; top: 0px; padding: 20px; font-size: 20px;"></bookmark>
      <nuxt-link :to="post._path">
        <p><small>{{post.date}}, {{post.author}}</small></p>
        <p>
          <i style="color: red;" class="fab fa-youtube" v-if="post.youtubeUrl"></i>
          <b style="font-size: 19px;">{{post.title}}</b>
        </p>
        <p style="font-size: 18px;">{{post.subheading}}</p>
        <div
          style="color: #00000090;"
          v-html="$md.set({ html: true, breaks: false }).renderInline(post.body)"
          class="body-preview"
        ></div>
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