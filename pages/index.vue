<template>
  <div class="container">
    <hero :title="siteInfo.sitename" :subheadline="siteInfo.sitedescription"></hero>
    <h4>Latest articles</h4>
    <article-preview v-for="post in lastBlogs" :key="post._slug" :post="post"></article-preview>
    <p style="text-align: center;">
      <nuxt-link to="/subject/all"><i class="fas fa-stream"></i> Show all articles</nuxt-link>
    </p>
    <div class="section">
      <h4>Collections</h4>
      <b-row>
        <b-col v-for="subject in subjects" :key="subject.name" cols="12" md="6">
          <nuxt-link :to="subject._path">
            <div class="subject-preview">
              <p>
                <b>{{subject.name}}</b>
              </p>
              <p>{{subject.description}}</p>
              <small>
                <b>{{$store.getters.getPostsFromSubjectSlug(subject._slug).length}}</b> article(s) in this collection
              </small>
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
    <div class="section" v-if="bookmarks.length > 0">
      <h4>Your bookmarks</h4>
      <b-row>
        <b-col v-for="post in bookmarks" :key="post._slug" cols="12" md="6">
          <article-preview :post="post"></article-preview>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import ArticlePreview from "~/components/ArticlePreview.vue";
import Hero from "~/components/Hero.vue";

export default {
  components: {
    ArticlePreview,
    Hero
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    lastBlogs() {
      return this.$store.getters.lastBlogs(3);
    },
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    subjects() {
      return this.$store.state.subjects;
    },
    bookmarks() {
      return this.$store.getters.getBookmarks()
    }
  }
};
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
