<template>
  <div class="container">
    <hero title="e-professor" subheadline="undertitel bla bla"></hero>
    <div class="section">
      <h4>Ämnen</h4>
      <ul id="subject-menu">
        <li v-for="subject in subjects" :key="subject.id">
          <nuxt-link :to="'/subject/' + subject.id">
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
      <article-preview :posts="posts"></article-preview>
    </div>
  </div>
</template>

<script>
import ArticleView from '~/components/ArticleView.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
import Hero from '~/components/Hero.vue'
import {getPosts, getSubjects} from '~/services/cmsService'

export default {
  components: {
    ArticleView, ArticlePreview, Hero
  },
  async asyncData({error}) {
    let posts = await getPosts()
    let subjects = await getSubjects()
    return {posts, subjects}
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  }
}
</script>
