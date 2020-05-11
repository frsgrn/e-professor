<template lang="html">
  <b-container>
    <!---<div class="post">
    <h1 class="title">{{title}}</h1>
    <p class="date">Posted by {{author}} on {{date}}</p>
    <div class="body" v-html="$md.render(body)"/>
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
  </div>--->
  <p><nuxt-link to="/">Collections</nuxt-link> <i class="fas fa-angle-right"></i> {{subject.name}}</p>
    <div class="section">
      <div class="fancy-article-list paper">
        <div class="content">
          <h4>{{ subject.name }}</h4>
          <p>{{ subject.description }}</p>
          <article-preview v-for="post in blogPosts" :key="post.title" :post="post"></article-preview>
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
  async asyncData({ params, app, payload, route, store }) {
    let subject = store.getters.getSubjectFromSlug(params.slug);
    let blogPosts = store.getters.getPostsFromSubjectSlug(params.slug);
    return {
      subject,
      blogPosts
    };
  }
};
</script>
