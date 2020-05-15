<template>
  <div class="article paper">
      <div class="content">
        <h1 style="font-weight: bold; margin: 0px;">{{post.title}}</h1>
        <h2>{{post.subheading}}</h2>
    <div v-if="post.youtubeUrl && post.youtubeUrl != ''">
        <b-row class="section">
        <b-col cols="12" style="text-align: center; margin: auto;">
            <div style="padding-bottom: 56.25%; text-align: center;">
            <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" class="video-embed" width="100%" height="100%" :src="post.youtubeUrl.replace('watch?v=', 'embed/')" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </b-col>
        </b-row>
    </div>
    <div class="body" v-html="$md.render(post.body)"></div>
    <p>{{post.author}}, {{post.date}}</p>
    </div>
    </div>
</template>
<script>
    export default {
        props: ["post"]
    }
</script>
<style>

blockquote {
    padding-left: 10px;
    border-left: 2px solid #d3d3d3;
}

</style>
