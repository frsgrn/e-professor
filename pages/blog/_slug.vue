<template lang="html">
<b-container>
  <!---<div class="post">
    <h1 class="title">{{title}}</h1>
    <p class="date">Posted by {{author}} on {{date}}</p>
    <div class="body" v-html="$md.render(body)"/>
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
  </div>--->
  <p><nuxt-link :to="relatedSubject._path">{{relatedSubject.name}}</nuxt-link> ⮞ {{post.title}}</p>
  <article-view :post="post"></article-view>
  </b-container>
</template>

<script>
import ArticleView from '~/components/ArticleView.vue'
export default {
  components: {
    ArticleView
  },
  async asyncData({ params, app, payload, route, store }) {
    let post = store.getters.getPostFromSlug(params.slug)
    let relatedSubject = store.getters.getSubjectFromSlug(post.subject)
    return {
      post, relatedSubject
    };
  }
}
</script>