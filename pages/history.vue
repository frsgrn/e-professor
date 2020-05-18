<template lang="html">
  <b-container>
    <navigation-bar :routes="[{name: 'history'}]"></navigation-bar>
    <article-preview-list :posts="history" :title="this.$L('HISTORY_TITLE')" :description="this.$L('HISTORY_DESCRIPTION')"></article-preview-list>
  </b-container>
</template>

<script>
import ArticlePreview from "~/components/ArticlePreview.vue";
import NavigationBar from "~/components/NavigationBar";
import ArticlePreviewList from "~/components/ArticlePreviewList.vue";

import Fuse from "fuse.js";

export default {
  components: {
    ArticlePreview,
    ArticlePreviewList,
    NavigationBar
  },
  computed: {
    history() {
      return this.$store.state.sessionStorage.history
    }
  }
};
</script>
