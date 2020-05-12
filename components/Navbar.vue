<template>
<b-navbar toggleable="lg" type="dark">
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
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search for content" v-model="searchQuery" style="border: none; color: black;"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.stop.prevent="submit()" style="background-color: #341f97; border: none;">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: ""
    }
  },
  methods: {
    submit() {
      if(this.searchQuery.length > 0) {
        this.$router.push({name: "search", query: {q: this.searchQuery}}); 
        this.searchQuery = ""
      }
    }
  },
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
    background-color: #6970E1;
}
</style>
