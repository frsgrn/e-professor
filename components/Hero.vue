<template>
  <div>
    <div class="hero" style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">
      <div style="cursor: pointer;" v-on:click="toggleMoreInformation()">
      <div style="display: inline;">
            <div class="profile" style="float: left;"></div>
            <div class="information">
              <h4 style="margin: 0px;">Ossi Pesämaa</h4>
              <p>Associate professor at Luleå University of Technology in Sweden <span class="toggleIcon"><span v-if="!toggled"><i class="fas fa-expand"></i></span><span v-else><i class="fas fa-compress"></i></span></span></p>
            </div>
      </div>
      <div class="more-information" v-if="this.$store.state.siteInfo.about" :hidden="!toggled" v-html="$md.render(this.$store.state.siteInfo.about)"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "title",
    "subheadline"
  ],
  data() {
    return {
      toggled: false
    }
  },
  methods: {
    toggleMoreInformation() {
      this.toggled = !this.toggled
    }
  }
};
</script>
<style>

.hero .information .toggleIcon {
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
