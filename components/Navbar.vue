<template>
<b-navbar toggleable="lg" type="light">
  <div class="container">
    <nuxt-link to="/"><b-navbar-brand>{{siteInfo.sitename}}</b-navbar-brand></nuxt-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/admin">admin</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    }
  }
}
</script>
<style>
.navbar {
    border-bottom: 0px solid #eee;
    margin-bottom: 30px;
}
</style>
