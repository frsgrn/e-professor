<template>
  <div>
    <div class="hero" style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">
      <h2>{{subheadline}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "title",
    "subheadline"
  ]
};
</script>
<style>
</style>
