<template>
  <b-navbar toggleable="lg" type="light">
    <div class="container">
      <nuxt-link to="/">
        <b-navbar-brand>
          <img src="/icon.png" style="width: 29px; height: 29px;" class="d-sm-inline d-md-none"> <span class="d-none d-md-inline">{{siteInfo.sitename}}</span>
          </b-navbar-brand>
      </nuxt-link>
      <b-nav-form v-on:submit.prevent="submit()" class="search-area">
        <b-input-group size="sm">
          <b-input-group-prepend>
            <button class="btn" id="search-icon"><i class="fas fa-search"></i></button>
          </b-input-group-prepend>
        <b-form-input
          class="search-field"
          :placeholder="label + ' ' + siteInfo.sitename"
          v-model="searchQuery"
        ></b-form-input>
        </b-input-group>
      </b-nav-form>
      <settings></settings>
    </div>
  </b-navbar>
</template>
<script>

import Settings from "~/components/Settings.vue";

export default {
  components: {
    Settings
  },
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
    },
    label() {
      return this.$L("SEARCH_LABEL")
    }
  }
};
</script>
<style>
.navbar {
  border-bottom: 0px solid #eee;
  margin-bottom: 30px;
}

.navbar .search-area {
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.03);
  border: 2px solid lightslategray;
  border-radius: 5px;
}

.navbar .search-field {
  border: none;
  color: black;
  box-shadow: none;
  width: 150px;
}
#search-icon {
  background-color: #eee;
  border: none;
  border-right: none;
  height: 31px;
}

.navbar .search-field:focus {
  box-shadow: none;
  border-left-width: 1px;
  margin-left: 1px;
  width: 149px;
  padding-left: 7px;
}

.navbar #search-icon:focus {
  box-shadow: none;
}
</style>
