<template>
  <div>
    <div class="hero" style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">
      <div style="display: inline;">
            <div class="profile" style="float: left;"></div>
            <div class="information">
              <h4 style="margin: 0px;">Ossi Pesämaa</h4>
              <p>Associate professor at Luleå University of Technology in Sweden</p>
            </div>
      </div>
      <h4>{{subheadline}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "title",
    "subheadline"
  ]
};
</script>
<style>

.hero .profile {
  width: 50px;
  height: 50px;
  background-image: url("/profile.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100%;
  margin-right: 20px;
}

@media screen and (max-width: 800px) {
  .profile {
    float: none !important;
    height: 600px;
    margin-bottom: 15px;
  }
}

</style>
