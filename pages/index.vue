<template>
  <div class="container">
    <hero :title="siteInfo.sitename" :subheadline="siteInfo.sitedescription"></hero>
    <div class="section">
      <h4>Collections</h4>
      <b-row>
        <b-col v-for="subject in subjects" :key="subject.name" cols="12" md="6">
          <nuxt-link :to="subject._path">
            <div class="subject-preview">
              <p><b>{{subject.name}}</b></p>
              <p>{{subject.description}}</p>
              <small><b>{{$store.getters.getPostsFromSubjectSlug(subject._slug).length}}</b> articles in this collection</small>
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
    <div class="section" style="">
      <div class="fancy-article-list paper" style="background-color: #ebeef1;">
        <div class="content">
          <h4>Latest entries</h4>
          <article-preview v-for="post in blogPosts" :key="post.title" :post="post"></article-preview>
      </div>
      </div>
  </div>
  </div>
</template>
<script>

import ArticlePreview from '~/components/ArticlePreview.vue'
import Hero from '~/components/Hero.vue'

export default {
  components: {
    ArticlePreview, Hero
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    lastBlogs() {
      return this.$store.getters.lastBlogs(5);
    },
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    subjects() {
      return this.$store.state.subjects
    },
  },
}
</script>

<style lang="css" scoped>
.posts-list {
  width: 100%;
  background-color: whitesmoke;
  padding: 20px;
  margin-top: 35px;
}
.post-link {
  padding-top: 10px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.main-header {
  text-align: center;
}
</style>
