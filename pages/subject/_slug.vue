<template lang="html">
  <b-container>
    <navigation-bar :routes="[{name: 'articles'}, {name: 'all', url: '/subject/all'}, {name: 'sort by collection'}, {name: subject.name}]"></navigation-bar>
    <div class="section">
      <article-preview-list :posts="blogPosts" :title="subject.name" :description="subject.description"></article-preview-list>
    </div>
  </b-container>
</template>

<script>
import ArticlePreviewList from "~/components/ArticlePreviewList";
import NavigationBar from "~/components/NavigationBar";

export default {
  components: {
    ArticlePreviewList,
    NavigationBar
  },
  async asyncData({ params, app, payload, route, store, error }) {
    try {
      let subject = store.getters.getSubjectFromSlug(params.slug);
      let blogPosts = store.getters.getPostsFromSubjectSlug(params.slug);
      if (!subject) throw new Error();
      return {
        subject,
        blogPosts
      };
    } catch (e) {
      return error({ statusCode: 404, message: "Subject not found" });
    }
  }
};
</script>
