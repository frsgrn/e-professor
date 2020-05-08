<template>
  <div class="container">
      <hero :title="subject.name" :subheadline="subject.description"></hero>
      <article-preview :posts="posts"></article-preview>
  </div>
</template>

<script>
import {getSubject} from '~/services/cmsService'
import ArticlePreview from '~/components/ArticlePreview.vue'
import Hero from '~/components/Hero.vue'

export default {
  components: {ArticlePreview, Hero},
  async asyncData({error, params}) {
    let subject = await getSubject(params.id)
    return {subject, posts: subject.posts}
  }
};
</script>

<style>
</style>
