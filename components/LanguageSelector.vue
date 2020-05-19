<template>
  <div>
      <b-dropdown :text="settings" class="language-selector" variant="light" dropleft>
            <b-dropdown-text><small>{{this.$L("SELECT_LANGUAGE")}}</small></b-dropdown-text>
            <b-dropdown-item v-on:click="$store.commit('SET_LANGUAGE', {lang: 'english', manual: true})">{{this.$L("LANG_ENGLISH")}}</b-dropdown-item>
            <b-dropdown-item v-on:click="$store.commit('SET_LANGUAGE', {lang: 'swedish', manual: true})">{{this.$L("LANG_SWEDISH")}}</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-text><small>{{this.$L("MISC")}}</small></b-dropdown-text>
            <b-dropdown-item v-on:click="$store.commit('CLEAR_HISTORY')">{{this.$L("CLEAR_HISTORY")}}</b-dropdown-item>
            <b-dropdown-item v-on:click="$store.commit('CLEAR_BOOKMARKS')">{{this.$L("CLEAR_BOOKMARKS")}}</b-dropdown-item>
          </b-dropdown>
  </div>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$L("SETTINGS")
    }
  }
}
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