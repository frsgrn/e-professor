<template>
  <div>
    <div class="navigation-bar">
      <span>
        <n-link to="/">{{this.$store.state.siteInfo.sitename}}</n-link> <i class="fas fa-angle-right"></i> 
      </span>
      <span v-for="route in routes" :key="route.url">
        <span v-if="route.url">
          <nuxt-link :to="route.url">{{route.name}}</nuxt-link>
        </span>
        <span v-else><b> {{route.name}}</b></span>
        <span v-if="route != routes[routes.length - 1]"> <i class="fas fa-angle-right"></i> </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["routes"]
};
</script>
<style>
.navigation-bar {
  margin-bottom: 10px;
}
</style>