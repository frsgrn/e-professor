<template>
  <div>
      <b-dropdown :text="languageFullname" class="language-selector" variant="light">
            <b-dropdown-item v-on:click="$store.commit('SET_LANGUAGE', 'english')">{{this.$L("LANG_ENGLISH")}}</b-dropdown-item>
            <b-dropdown-item v-on:click="$store.commit('SET_LANGUAGE', 'swedish')">{{this.$L("LANG_SWEDISH")}}</b-dropdown-item>
          </b-dropdown>
  </div>
</template>
<script>
export default {
  computed: {
    languageFullname() {
      return this.$L("LANG_" + this.$store.state.sessionStorage.language.toUpperCase())
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