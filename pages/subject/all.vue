<template lang="html">
  <b-container>
  <navigation-bar :routes="[{name: 'articles'}, {name: 'all'}]"></navigation-bar>
    <div class="section">
      <article-preview-list :posts="this.$store.state.blogPosts" title="All articles" description="The entire collection of articles, sorted chronological order."></article-preview-list>
    </div>
  </b-container>
</template>

<script>
import ArticlePreviewList from "~/components/ArticlePreviewList.vue";
import NavigationBar from "~/components/NavigationBar";

export default {
  components: {
    ArticlePreviewList, NavigationBar
  }
};
</script>
