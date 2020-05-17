<template>
  <b-container>
    <h1 v-if="error.statusCode === 404">Page not found, {{error.statusCode}}</h1>
    <h1 v-else>An error occurred, {{error.statusCode}}</h1>
    <p><nuxt-link to="/">Return to {{this.$store.state.siteInfo.sitename}}</nuxt-link></p>
  </b-container>
</template>

<script>
export default {
  props: ['error']
}
</script>