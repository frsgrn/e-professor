<template>
  <div class="container">
    <article-view :title="post.title" :subheading="post.subheading" :content="post.content" :author="post.author"></article-view>
  </div>
</template>

<script>
import {getPost} from '~/services/cmsService'
import ArticleView from '~/components/ArticleView.vue'
export default {
  components: {ArticleView},
  async asyncData({error, params}) {
      let post = await getPost(params.id)
      return {post}
  }
};
</script>

<style>
</style>
