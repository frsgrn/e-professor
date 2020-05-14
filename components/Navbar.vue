<template>
<b-navbar toggleable="lg" type="dark">
  <div class="container">
    <nuxt-link to="/"><b-navbar-brand>{{siteInfo.sitename}}</b-navbar-brand></nuxt-link>
    <b-nav-form v-on:submit.prevent="submit()">
          <b-form-input size="sm" class="mr-sm-2" :placeholder="'Search ' + siteInfo.sitename" v-model="searchQuery" style="border: none; color: black;"></b-form-input>
        </b-nav-form>
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
