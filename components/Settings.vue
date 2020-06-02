<template>
  <div>
    <b-dropdown class="language-selector" variant="light" no-caret="">
      <template slot="button-content">
        <i class="py-0 fas fa-adjust"></i> <i class="fas fa-caret-down"></i>
      </template>
      <b-dropdown-text>
        <small>{{this.$L("SETTINGS")}}</small>
      </b-dropdown-text>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-text>
        <small>{{this.$L("SELECT_LANGUAGE")}}</small>
      </b-dropdown-text>
      <b-dropdown-item
        v-on:click="$store.commit('SET_LANGUAGE', {lang: 'english', manual: true})"
      >{{this.$L("LANG_ENGLISH")}}</b-dropdown-item>
      <b-dropdown-item
        v-on:click="$store.commit('SET_LANGUAGE', {lang: 'swedish', manual: true})"
      >{{this.$L("LANG_SWEDISH")}}</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-text>
        <small>{{this.$L("MISC")}}</small>
      </b-dropdown-text>
      <b-dropdown-item v-on:click="$store.commit('CLEAR_HISTORY')">{{this.$L("CLEAR_HISTORY")}}</b-dropdown-item>
      <b-dropdown-item v-on:click="$store.commit('CLEAR_BOOKMARKS')">{{this.$L("CLEAR_BOOKMARKS")}}</b-dropdown-item>
      <b-dropdown-item v-on:click="toggleDev()">Växla utvecklingsläge</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$L("SETTINGS");
    }
  },
  methods: {
    toggleDev() {
      if (process.env.BRANCH != "develop") {
        let date = new Date();
        date.setTime(date.getTime()+(30*24*60*60*1000));
        let expires = "; expires="+date.toGMTString();
        window.cookie = "nf_ab=develop" + expires
        }
      else {
        window.cookie = "nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
      }
      window.location.reload(true)
    }
  }
};
</script>
<style>
.language-selector .btn {
  background-color: transparent;
  border: none;
}

.language-selector :focus {
  box-shadow: none;
}
</style>