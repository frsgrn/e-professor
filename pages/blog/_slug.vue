<template lang="html">
<b-container>
    <navigation-bar :routes="[{name: 'articles', url: '/subject/all'}, {name: post.title}]"></navigation-bar>
    <div class="section">
  <article-view :post="post"></article-view>
  </div>
  </b-container>
</template>

<script>
import ArticleView from '~/components/ArticleView.vue'
import NavigationBar from "~/components/NavigationBar";

export default {
  components: {
    ArticleView, NavigationBar
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.subheading }
      ]
    }
  },
  async asyncData({ params, app, payload, route, store, error }) {
    try {
    let post = store.getters.getPostFromSlug(params.slug)
    if(!post) throw new Error()
    return {
      post
    };
    } catch(e) {
      error({statusCode: 404, message: 'Post not found'})
    }
  }
}
</script>