<template lang="html">
  <b-container>
    <navigation-bar :routes="[{name: 'search'}]"></navigation-bar>
    <article-preview-list v-if="results.length > 0" :posts="results.map(x => x.item)" :title="titleMessage"></article-preview-list>
    <article-preview-list v-else :posts="lastBlogs" :title="titleMessage" :description="recentMessage"></article-preview-list>
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
    lastBlogs() {
      return this.$store.getters.lastBlogs(3);
    },
    /*results() {
      const options = {
        includeScore: true,
        keys: ["title", "description", "body", "author", "subject", "date"]
      };
      const fuse = new Fuse(this.$store.getters.getBlogPosts(), options);
      return fuse.search(this.$route.query.q).sort((a, b) => (a.score > b.score ? 1 : -1));
    },*/
    titleMessage() {
      if (this.results.length > 0) return this.$L("SEARCH_TITLE") + " \"" + this.$route.query.q + "\""
      else return this.$L("SEARCH_TITLE_NO_RESULTS") + " \"" + this.$route.query.q + "\""
    },
    recentMessage() {
      return this.$L('SEARCH_SHOW_RECENTS')
    }
  },
  watchQuery: true,
  async asyncData({ params, app, payload, route, store, error, query, redirect }) {
    console.log(route)
    console.log(query)
    if (!query.q) {
      return redirect("/");
    }
    const options = {
        includeScore: true,
        keys: ["title", "description", "body", "author", "subject", "date"]
      };
      const fuse = new Fuse(store.getters.getBlogPosts(), options);
      return {results: fuse.search(query.q).sort((a, b) => (a.score > b.score ? 1 : -1))}
  }
};
</script>
