<template>
  <div class="article paper">
    <div class="content">
        <div style="margin-bottom: 15px;">
      <h1 style="font-weight: bold; margin: 0px;"><bookmark :post="post" style="display: inline-block; font-size: 35px;"></bookmark> {{post.title}}</h1>
      <h2 style="color: #303030;">{{post.subheading}}</h2>
      <div v-if="post.youtubeUrl && post.youtubeUrl != ''">
        <b-row class="section">
          <b-col cols="12" style="text-align: center; margin: auto;">
            <div style="padding-bottom: 56.25%; text-align: center;">
              <iframe
                style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
                class="video-embed"
                width="100%"
                height="100%"
                :src="post.youtubeUrl.replace('watch?v=', 'embed/')"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </b-col>
        </b-row>
      </div>
      </div>
      <div class="body" v-html="$md.render(post.body)"></div>
      <p>{{post.author}}, {{post.date}}</p>
    </div>
  </div>
</template>
<script>
import Bookmark from "~/components/Bookmark.vue";
export default {
  props: ["post"],
  components: {
    Bookmark
  },
  mounted() {
    this.$store.commit('PUSH_HISTORY', this.post)
  }
};
</script>
<style>
blockquote {
  padding-left: 10px;
  border-left: 2px solid #d3d3d3;
}
</style>
