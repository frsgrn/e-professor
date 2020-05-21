<template lang="html">
  <b-container>
  <navigation-bar :routes="[{name: 'all'}]"></navigation-bar>
    <div class="section">
      <article-preview-list :posts="this.$store.getters.getBlogPosts()" :title="$L('ALL_ARTICLES_TITLE')" :description="$L('ALL_ARTICLES_DESCRIPTION')"></article-preview-list>
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
