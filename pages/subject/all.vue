<template lang="html">
  <b-container>
  <p><nuxt-link to="/">Collections</nuxt-link> <i class="fas fa-angle-right"></i> all</p>
    <div class="section">
      <div class="fancy-article-list paper">
        <div class="content">
          <h4>All articles</h4>
          <p>All articles in chronological order.</p>
          <article-preview v-for="post in this.$store.state.blogPosts" :key="post._slug" :post="post"></article-preview>
      </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import ArticleView from "~/components/ArticleView.vue";
import ArticlePreview from "~/components/ArticlePreview.vue";

export default {
  components: {
    ArticleView,
    ArticlePreview
  }
};
</script>
