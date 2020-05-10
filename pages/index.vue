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
      <h4>Ämnen</h4>
      <ul id="subject-menu">
        <li v-for="subject in subjects" :key="subject.name">
          <nuxt-link @click.native="selectSubject(subject)" :to="subject._path">
          <div class="subject-preview">
            <h4>{{subject.name}}</h4>
            <p>{{subject.description}}</p>
          </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="section" style="">
      <h4>Senaste inlägg</h4>
      <article-preview :posts="blogPosts"></article-preview>
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
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    subjects() {
      return this.$store.state.subjects
    },
  },
  methods: {
    selectSubject(selectSubject) {
      this.$store.getters.selectedSubject(selectSubject);
    }
  }
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
