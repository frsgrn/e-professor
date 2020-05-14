<template lang="html">
  <b-container>
    <navigation-bar :routes="[{name: 'search'}]"></navigation-bar>
    <article-preview-list :posts="results.map(x => x.item)" :title="titleMessage"></article-preview-list>
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
    results() {
      const options = {
        includeScore: true,
        keys: ["title", "description", "body", "author", "subject", "date"]
      };
      const fuse = new Fuse(this.$store.state.blogPosts, options);
      return fuse.search(this.$route.query.q).sort((a, b) => (a.score > b.score ? 1 : -1));
    },
    titleMessage() {
      if (this.results.length > 0) return "Search results for \"" + this.$route.query.q + "\""
      else return "Could not find anything matching query \"" + this.$route.query.q + "\""
    }
  },
  watchQuery: true,
  async asyncData({ params, app, payload, route, store, error, query }) {
    if (!query.q) {
      return error({ statusCode: 404, message: "No query" });
    }
  }
};
</script>
