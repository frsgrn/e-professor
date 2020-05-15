<template>
  <b-navbar toggleable="lg" type="light">
    <div class="container">
      <nuxt-link to="/">
        <b-navbar-brand>{{siteInfo.sitename}}</b-navbar-brand>
      </nuxt-link>
      <b-nav-form v-on:submit.prevent="submit()">
        <b-input-group size="sm">
          <b-input-group-prepend>
            <button class="btn" id="search-icon"><i class="fas fa-search"></i></button>
          </b-input-group-prepend>
        <b-form-input
          class="search-field"
          :placeholder="'Search ' + siteInfo.sitename"
          v-model="searchQuery"
        ></b-form-input>
        </b-input-group>
      </b-nav-form>
    </div>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    submit() {
      if (this.searchQuery.length > 0) {
        this.$router.push({ name: "search", query: { q: this.searchQuery } });
        this.searchQuery = "";
      }
    }
  },
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    }
  }
};
</script>
<style>
.navbar {
  border-bottom: 0px solid #eee;
  margin-bottom: 30px;
  background-color: #f1f3f2;
}

.navbar .search-field {
  border: solid 2px gray;
  color: black;
  background-color: #f9f9f9;
  box-shadow: none;
}

#search-icon {
  background-color: #f1f3f2;
  border: solid 2px gray;
  border-right: none;
  height: 31px;
}

.navbar .search-field:focus {
  box-shadow: none;
}

.navbar #search-icon:focus {
  box-shadow: none;
}
</style>
