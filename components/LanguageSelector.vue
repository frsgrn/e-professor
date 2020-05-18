<template>
  <div>
      <b-dropdown :text="this.$store.state.sessionStorage.language" class="language-selector" variant="light">
            <b-dropdown-item v-on:click="$store.commit('SET_LANGUAGE', 'english')">english</b-dropdown-item>
            <b-dropdown-item v-on:click="$store.commit('SET_LANGUAGE', 'swedish')">swedish</b-dropdown-item>
          </b-dropdown>
  </div>
</template>
<script>
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