<template>
  <div class="article">
    <div class="section">
        <h1 class="headline">{{post.title}}</h1>
        <h2 class="subheading">{{post.subheading}}</h2>
    </div>
    <div class="section">
        <b-row>
        <b-col sm="8" style="text-align: center; margin: auto;">
            <div style="padding-bottom: 56.25%; text-align: center;">
            <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" class="video-embed" v-if="post.youtubeUrl" width="100%" height="100%" :src="post.youtubeUrl.replace('watch?v=', 'embed/')" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </b-col>
        </b-row>
    </div>
    <div class="body" v-html="$md.render(post.body)"></div>
    <p>{{post.author}}, {{post.date}}</p>
    </div>
</template>
<script>
    export default {
        props: ["post"]
    }
</script>
<style>
</style>
