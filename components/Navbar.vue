<template>
  <b-navbar toggleable="lg" type="light" fixed="top" id="navbar">
    <div class="container">
      <nuxt-link to="/">
        <b-navbar-brand style="font-family: jost">
          <div v-if="!scrollDown">
            <img
              src="/icon.png"
              style="width: 29px; height: 29px; margin-bottom: 3px;"
              class="d-sm-inline d-md-none"
            />
            <span class="d-none d-md-inline">{{siteInfo.sitename}} <sup style="color: crimson;">beta</sup></span>
          </div>
          <div v-else>
            <img src="/icon.png" style="width: 29px; height: 29px; margin-bottom: 3px;" />
          </div>
        </b-navbar-brand>
      </nuxt-link>
      <settings></settings>
      <b-navbar-nav class="ml-auto">
        <b-nav-form v-on:submit.prevent="submit()" class="search-area">
          <b-input-group size="sm">
            <b-input-group-prepend>
              <button class="btn" id="search-icon">
                <i class="fas fa-search"></i>
              </button>
            </b-input-group-prepend>
            <b-form-input
              class="search-field"
              :placeholder="label + ' ' + siteInfo.sitename"
              v-model="searchQuery"
            ></b-form-input>
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>
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
      searchQuery: "",
      scrollDown: false
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
  mounted() {
    var context = this;
    $(window).scroll(function(event) {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $("#navbar").addClass("scroll-down");
        context.scrollDown = true;
      } else {
        $("#navbar").removeClass("scroll-down");
        context.scrollDown = false;
      }
    });
  },
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    },
    label() {
      return this.$L("SEARCH_LABEL");
    }
  }
};
</script>
<style>
.navbar {
  background-color: #f3f5f7;
  transition: padding 0.2s ease;
  padding-top: 15px;
  border: none;
}

.navbar .search-area {
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.03);
  border: 2px solid lightslategray;
  border-radius: 5px;
}

.scroll-down {
  border-bottom: 2px solid #eee;
  padding-top: 8px;
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
