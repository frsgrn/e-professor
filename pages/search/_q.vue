<template lang="html">
  <b-container>
    <div class="section">
      <div class="fancy-article-list paper">
        <div class="content">
            <h4>Showing results for query "{{this.$route.params.q}}"</h4>
          <article-preview v-for="result in results" :key="result.item._slug" :post="result.item"></article-preview>
      </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import ArticleView from "~/components/ArticleView.vue";
import ArticlePreview from "~/components/ArticlePreview.vue";
import Fuse from 'fuse.js'

export default {
  components: {
    ArticleView,
    ArticlePreview
  },
  async asyncData({ params, app, payload, route, store, error }) {
      if(!params.q) {
          return error({ statusCode: 404, message: 'No query' })
      }
    const options = {
        includeScore: true,
        keys: ['title', 'description', "body", "author", "subject", "date"]
    }
    const fuse = new Fuse(store.state.blogPosts, options)
    const result = fuse.search(params.q)
    return {results: result.sort((a, b) => (a.score < b.score) ? 1 : -1)}
  }
};
</script>
