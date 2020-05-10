<template lang="html">
  <b-container>
    <!---<div class="post">
    <h1 class="title">{{title}}</h1>
    <p class="date">Posted by {{author}} on {{date}}</p>
    <div class="body" v-html="$md.render(body)"/>
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
  </div>--->
    <div class="section" style="">
      <h4>Inlägg i {{ subject.name }}</h4>
      <article-preview :posts="blogPosts"></article-preview>
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
    let subject = store.getters.selectedSubject(params.slug)
    let blogPosts = store.getters.blogsForSelectedSubject(params.slug)
    return {
      subject, blogPosts
    }
  }
}
</script>
