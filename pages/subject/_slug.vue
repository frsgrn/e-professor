<template lang="html">
  <b-container>
  <p><nuxt-link to="/">Collections</nuxt-link> <i class="fas fa-angle-right"></i> {{subject.name}}</p>
    <div class="section">
      <div class="fancy-article-list paper">
        <div class="content">
          <h4>{{ subject.name }}</h4>
          <p>{{ subject.description }}</p>
          <article-preview v-for="post in blogPosts" :key="post._slug" :post="post"></article-preview>
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
  },
  async asyncData({ params, app, payload, route, store, error }) {
    try {
      let subject = store.getters.getSubjectFromSlug(params.slug);
      let blogPosts = store.getters.getPostsFromSubjectSlug(params.slug);
      if(!subject) throw new Error()
      return {
        subject,
        blogPosts
      };
    } catch(e) {
      return error({statusCode: 404, message: 'Subject not found'})
    }
  }
};
</script>
