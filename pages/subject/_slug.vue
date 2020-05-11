<template lang="html">
  <b-container>
    <!---<div class="post">
    <h1 class="title">{{title}}</h1>
    <p class="date">Posted by {{author}} on {{date}}</p>
    <div class="body" v-html="$md.render(body)"/>
    <p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
  </div>--->
    <div class="section" style="">
      <div class="fancy-article-list paper">
        <div class="content">
          <h4>{{ subject.name }}</h4>
      <b-list-group>
        <nuxt-link v-for="post in blogPosts" :key="post.title" :to="post._path">
        <div class="article-preview">
          <p><b>{{post.title}}</b></p>
          <p>{{post.subheading}}</p>
        </div>
        </nuxt-link>
      </b-list-group>
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
    let subject = store.getters.getSubjectFromSlug(params.slug)
    let blogPosts = store.getters.getPostsFromSubjectSlug(params.slug)
    return {
      subject, blogPosts
    }
  }
}
</script>
