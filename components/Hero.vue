<template>
  <div>
    <div
      class="hero"
      style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;"
    >
      <div>
        <div class="header-hero">
          <h5 style="margin-bottom: 0px;">
            <span style="font-weight: bold; margin-right: 15px;">{{this.$store.state.siteInfo.sitename}}</span> {{this.$store.state.siteInfo.sitedescription}}
          </h5>
        </div>
        <div style="display: inline; cursor: pointer;" v-on:click="toggleMoreInformation()">
          <div class="profile" style="float: left;"></div>
          <div class="information">
            <h4 style="margin: 0px;">Ossi Pesämaa</h4>
            <p>
              <span class="toggleIcon">
                <span v-if="!toggled" class="bold-link">({{this.$L("SHOW_MORE")}})</span>
                <span v-else class="bold-link">({{this.$L("SHOW_LESS")}})</span>
              </span>
              Associate professor at Luleå University of Technology in Sweden
            </p>
          </div>
        </div>
        <div :hidden="!toggled">
          <p class="contact-information">
            <span>
              <i class="fas fa-mobile-alt"></i> +49703248747
            </span>
            <span>
              <i class="far fa-envelope"></i> email@example.com
            </span>
          </p>
          <div
            class="more-information"
            v-if="this.$store.state.siteInfo.about"
            v-html="$md.render(this.$store.state.siteInfo.about)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "subheadline"],
  data() {
    return {
      toggled: false
    };
  },
  methods: {
    toggleMoreInformation() {
      this.toggled = !this.toggled;
    }
  }
};
</script>
<style>
.hero .header-hero {
  width: 100%;
  color: white;
  padding: 30px;
  margin-bottom: 40px;
  border-radius: 15px;
  background-color: #151d1f;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2326393e' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.contact-information span {
  margin-right: 20px;
  white-space: nowrap;
}

.hero .profile {
  position: relative;
}

.hero .profile {
  width: 53px;
  height: 53px;
  background-image: url("/profile.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100%;
  margin-right: 20px;
}

@media screen and (max-width: 800px) {
  .hero .profile {
    float: none !important;
    margin-bottom: 15px;
    text-align: center;
    margin: auto;
  }
  .hero .information {
    text-align: center;
  }
}
</style>
