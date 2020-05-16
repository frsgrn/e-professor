<template>
  <div>
    <div v-on:click="toggleBookmark()" style="cursor: pointer;">
      <span v-if="isBookmarked"><i class="fas fa-bookmark"></i></span>
      <span v-else><i class="far fa-bookmark"></i></span>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "post"
  ],
  methods: {
      toggleBookmark() {
          if (this.isBookmarked) {
              this.$store.commit('REMOVE_BOOKMARK', this.post)
          }
          else {
              this.$store.commit('ADD_BOOKMARK', this.post)
              this.makeToast(false, "Post saved", this.post.title + " was bookmarked.")
          }
      },
      makeToast(append = false, title, body) {
        this.toastCount++
        this.$bvToast.toast(`${body}`, {
          title,
          autoHideDelay: 1500,
          appendToast: append
        })
      }
  },
  computed: {
    bookmarks() {
        return this.$store.getters.getBookmarks()
    },
    isBookmarked() {
        return this.bookmarks.filter(b_post => this.post._slug == b_post._slug).length > 0
    }
  }
};
</script>
<style>

</style>