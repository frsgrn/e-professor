<template>
  <div>
    <nuxt-link :to="post._path">
    <div class="article-preview">
          <p><b>{{post.title}}</b></p>
          <p>{{post.subheading}}</p>
          <div style="color: #00000090;" v-html="$md.set({ html: true, breaks: false }).renderInline(post.body)" class="body-preview"></div>
          <p>{{post.date}}, {{post.author}}</p>
            <p style="font-weight: bold; border-bottom: 2px solid black; display: inline;">Read more</p>
    </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: [
    "post"
  ]
};
</script>
<style>

</style>