<template lang="html">
  <b-container>
    <div class="section">
      <div class="fancy-article-list paper">
        <div class="content">
            <div v-if="results.length > 0">
                <h4>Search results for "{{this.$route.query.q}}"</h4>
                <div v-for="result in results" :key="result.item._slug">
                  <article-preview :post="result.item"></article-preview>
                </div>
            </div>
            <div v-else>
                <h4>No results found for query "{{this.$route.query.q}}"</h4>
            </div>
      </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import ArticleView from "~/components/ArticleView.vue";
import ArticlePreview from "~/components/ArticlePreview.vue";
import Fuse from "fuse.js";

export default {
  components: {
    ArticleView,
    ArticlePreview
  },
  computed: {
    results() {
      const options = {
        includeScore: true,
        keys: ["title", "description", "body", "author", "subject", "date"]
      };
      const fuse = new Fuse(this.$store.state.blogPosts, options);
      return fuse.search(this.$route.query.q).sort((a, b) => (a.score > b.score ? 1 : -1));
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
