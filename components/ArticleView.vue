<template>
  <div class="article">
    <h1 class="headline">{{title}}</h1>
    <h2 class="subheading">{{subheading}}</h2>
    <div class="content">
        <p>
        {{content}}
        </p>
    </div>
    <p>{{author}}</p>
    </div>
</template>
<script>
    export default {
        props: ["title", "subheading", "content", "author", "condensed", "url", "created", "updated"]
    }
</script>
<style>
</style>
