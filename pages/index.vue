<!---<template lang="html">
  <div class="main">
    <div class="main-header">
      <h1>{{siteInfo.sitename}}</h1>
      <p>{{siteInfo.sitedescription}}</p>
    </div>
    <div class="posts-list">
      <h2 class="posts-list-title">Posts</h2>
      <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.title}}</n-link></p>
    </div>
  </div>
</template>-->

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
      <h4>Senaste inlägg</h4>
      <div v-for="post in lastBlogs" :key="post.name">
      <nuxt-link :to="post._path">
        <p><b>{{post.title}}</b> - {{post.subheading}}</p>
        </nuxt-link>
        </div>
      <!---<article-preview :posts="lastBlogs"></article-preview> -->
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
